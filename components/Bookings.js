import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import { db } from '../Firebase';

const Bookings = ({navigation, route}) => {
    const { userUid } = route.params
    
    const [bookings, setBookings] = useState(null);
    const getBookings = async () => {

        const querySnap = await db.collection('bookings').where('userUid', '==', userUid).get();
        const allBookings = querySnap.docs.map(docSnap => docSnap.data())

        setBookings(allBookings);
    }
    useEffect(() => {
        getBookings();
    },[])

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: '#F08080', justifyContent: 'center', alignItems: 'center', height: '30%'}}>
                <Text style={{color: '#Fff', fontSize: 20, }}>Bookings</Text>
            </View>
                <View style={{padding: 20}}>
                    <FlatList
                        data={bookings}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => {
                            return(
                                <SafeAreaView style={{flex: 1}}>
                                    <ScrollView>
                                        <TouchableOpacity onPress={() => ('')}>
                                            <View style={styles.tbRoom}>
                                                <Image 
                                                    source={{uri: item.roomImage}}
                                                    style={{height: 76, width: 100, borderRadius: 10}}
                                                />
                                                <View style={styles.row}>
                                                    <View>
                                                        <Text style={{color: '#DC143C', fontWeight: 'bold'}}>{item.hotelName}</Text>
                                                        <Text style={{color: '#F08080', fontWeight: 'bold'}}>{item.roomName}</Text>
                                                        <Text style={{color: '#F08080'}}>Adults: {item.adults}</Text>  
                                                        <Text style={{color: '#F08080'}}>Children: {item.children}</Text>
                                                    </View>
                                                    <View style={{paddingLeft: 40, paddingTop: 20,}}>
                                                        <View style={{backgroundColor: '#DC143C', borderRadius: 10, width: 70, justifyContent: 'center', alignItems: 'center', height: 30}}>
                                                             <Text style={{color: '#Fff'}}>{item.status}</Text>
                                                        </View>
                                                       
                                                    </View>    
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </SafeAreaView>     
                            ); 
                        }}
                    />
                </View>

            <View style={styles.Tab}>
                <View>
                    <FontAwesome name="home" size={32} color='#FFF' onPress = {() => navigation.navigate('RandHotel', {userUid: userUid})}/>
                </View>
                <View>
                    <FontAwesome name="user-circle-o" size={28} color='#DC143C' style={{marginLeft: 120}} onPress = {() => navigation.navigate('UserProfile', {userUid: userUid})}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    Tab: {
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        width: 360,
        backgroundColor: '#F08080',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0, 
    },
    tbRoom: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#F08080',
    borderRadius: 11,
    width: '100%',
  },
  row: {
    paddingLeft: 10,
    flexDirection: 'row',
  },
});

export default Bookings;
