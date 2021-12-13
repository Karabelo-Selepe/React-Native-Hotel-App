import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Entypo, FontAwesome, Foundation, Ionicons } from '@expo/vector-icons';

import Carousel from '../components/Carousel';

import { dummyData, dummtyHotelData } from '../data/Data';

import { db } from './../Firebase';
import { color } from 'react-native-reanimated';

const RandHotel = ({navigation, route}) => {

    const { userUid } = route.params;

    // ....
    const [hotel, setHotel] = useState(null);

    const getHotels = async () => {
        const querySnap = await db.collection('hotel').get();
        const allHotels = querySnap.docs.map(docSnap => docSnap.data())

        setHotel(allHotels);
    }
    useEffect(() => {
        getHotels();
    }, [])

    return (
        <View style={styles.container}>
            <Carousel data = {dummyData} />
            <Text style={styles.textHeader} >BEST HOTELS</Text>

             <View style={{paddingBottom: 85, backgroundColor: '#FFF' }}>
                <FlatList
                    data={hotel}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('HotelInfo', {hotel: item, adminUid: item.adminUid, userUid: userUid})} >
                                <View style={styles.inner}>
                                    <Image 
                                        source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2iuNYYkhi71S5BFbUH6TagHaE8%26pid%3DApi&f=1'}}
                                        style={styles.img}
                                        //resizeMode='stretch' 
                                    />

                                    <Text style={styles.textHeader2}> {item.hotelName} </Text>

                                    <View style={{ paddingLeft: 10, paddingTop: 5}}>
                                        <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                            <Ionicons name='ios-location-outline' size={15} color='black' />
                                            <Text style={styles.textAddress}> {item.hotelAddress} </Text>
                                        </View>

                                        <View style={{flexDirection: 'row', paddingLeft: 12}}>
                                            <Foundation name='telephone' size={15} color='black' />
                                            <Text style={styles.textNumber}> {item.hotelNumber} </Text>
                                        </View>
                                        
                                        <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                            <Ionicons name='ios-star-half' size={15} color='black' />
                                            <Text style={{...styles.textNumber, ...styles.color}}>{item.hotelRating}</Text>
                                        </View>
                                    </View>
                                    
                                </View>
                            </TouchableOpacity>                     
                        );
                    }}
                />
            </View>

            <View style={styles.Tab}>
                <View>
                    <FontAwesome name="home" size={32} color='#F08080' onPress = {() => navigation.navigate('RandHotel', {userUid: userUid})}/>
                </View>
                <View>
                    <FontAwesome name="user-circle-o" size={28} color='#FFF' style={{marginLeft: 180}} onPress = {() => navigation.navigate('UserProfile', {userUid: userUid})}/>
                </View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    color: {
        color: '#000',
    },
    textHeader: {
        color: '#fff',
        fontSize: 20,
        margin: 10,
        marginTop: 30,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        paddingBottom: '70%',
        width: '100%',
        height: '100%',
        //paddingLeft: '2%',
        backgroundColor: '#DC143C',
        paddingTop: '5%'
    },
    textHeader2: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    textAddress: {
        color: '#000',
        fontSize: 12,
        fontStyle: 'italic',
        width: '75%'
    },
    textNumber: {
        color: '#000',
        fontSize: 12,
        fontStyle: 'italic',
        padding: 2
    },
     inner: {
        flex: 1,
        marginLeft: '7%',
        marginTop: 15,
        width: 310,
        height: 240,
        backgroundColor: '#DC143C',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F08080',
        elevation: 5,
    },
    img: { 
        width: 308, 
        height: 145,
        borderRadius: 10
        //borderTopLeftRadius: 15,
        //borderTopRightRadius: 15,
    },
    Tab: {
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        width: '110%',
        backgroundColor: '#DC143C',
        padding: 20,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0, 
    },
    
});

export default RandHotel;
