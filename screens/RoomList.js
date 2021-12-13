import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import { db } from '../Firebase';

const RoomList = ({route, navigation}) => {

    const { hotelName, address, phone, adminUid, userUid } = route.params;

    const [rooms, setRooms] = useState(null);

    const getRooms = async () => {
        
        const querySnap = await db.collection('rooms').where('adminUid', '==', adminUid).get();
        const allRooms = querySnap.docs.map(docSnap => docSnap.data());

        setRooms(allRooms);
    }
    useEffect(() => {
        getRooms();
    })

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: '#DC143C', margintTop: 10, height: '35%'}}>
                <Text style={{textAlign: 'center', color: '#fff', marginTop: '25%', fontSize: 18, fontWeight: 'bold'}}>{hotelName}</Text>
            </View>

            <View>
                <FlatList
                    data={rooms}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <View style={{flexDirection: 'row', margin: 10, height: 110, borderWidth: 1, borderColor: '#DC143C', borderRadius: 10}}>
                                <Image 
                                    source={{uri: item.roomImage}}
                                    style={{height: 108, width: 130, borderRadius: 10}}
                                />

                                <View style={{marginLeft: 10}}>
                                    <Text style={styles.roomHeader}>{item.roomName}</Text>
                                    <View style={{width: 200, margin: 5}} >
                                        <Text style={{color: '#DC143C'}} >{item.roomDescription}</Text>
                                        <Text style={{color: '#FF0000'}} >{item.roomPrice}</Text>
                                    </View>
                                    
                                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Guests', {
                                        
                                        hotelName: hotelName,
                                        roomName: item.roomName,
                                        roomDescription: item.roomDescription,
                                        roomImage: item.roomImage,
                                        adminUid: adminUid,
                                        address: address,
                                        phone: phone,
                                        userUid: userUid,
                                        roomPrice: item.roomPrice,
                                    })} >
                                        <Text style={styles.btnTxt}>Select This Room</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 150,
        width: '100%',
        height: '100%',
        paddingTop: '5%'
    },
    btn: {
        backgroundColor: '#DC143C', 
        borderRadius: 30, 
        height: '30%', 
        width: 130,
    },
    btnTxt: {
        textAlign: 'center', 
        color: '#fff', 
        paddingTop: 6
    },
    roomHeader: {
        color: '#DC143C',
        fontWeight: 'bold',
        fontSize: 16,
    }, 
});
export default RoomList
