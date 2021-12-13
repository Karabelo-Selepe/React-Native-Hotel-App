import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import moment from 'moment';

import { SafeAreaView } from 'react-native-safe-area-context';

const RoomInfo = ({route, navigation}) => {

    const { roomDescription, hotelName, roomName, roomImage, phone, address, adults, children, adminUid, userUid, roomPrice, date } = route.params;

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: '#DC143C', height: 180}}>
                <View style={{marginLeft: 20, height: 190, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <AntDesign
                        name='leftcircle'
                        size={24}
                        onPress={() => navigation.navigate('RoomList', {hotelName: hotelName})}
                        color='#fff'
                    /> 
                    <Text style={{color: '#fff', fontSize: 20, marginRight: 120,}}>{roomName}</Text>
                </View>
            </View>

            <View  style={{flex: 1}}>

                <Image source={{uri: roomImage}} style={{height:160, width:340, margin: 10, borderRadius: 10}}/>

                <SafeAreaView  style={{flex: 1, margin: 10}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View >
                            <Text style={{color: '#DC143C'}}>Check-In: {moment(date).format("DD/MM/YYYY")}</Text>
                            <Text style={{color: '#DC143C'}}>3 Sleeps</Text>
                            <Text style={{color: '#DC143C'}}>1 King / Twin bed</Text>
                            <Text style={{color: '#DC143C'}}>1 Bathroom</Text>
                            <Text style={{color: '#DC143C'}}>Amenities</Text>
                            <View>
                                <Text style={{color: '#DC143C'}}>{roomDescription}</Text>
                            </View>
                        </View>
                        
                    </ScrollView>
                </SafeAreaView>
                
                <View style={{flex: 0.1, marginTop: 10}}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PaymentMethod', {
                        roomName: roomName,

                        adults: adults,
                        children: children,

                        userUid: userUid,
                        adminUid: adminUid,
                        hotelName: hotelName,
                        address: address,
                        phone: phone,
                        roomPrice: roomPrice,
                        roomDescription: roomDescription,
                        roomImage: roomImage,
                    })} >
                        <Text style={styles.btnTxt}>Go To Payment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50,
        
    },
    displayView: {
        flexDirection: 'row',

    },
    btn: {
        backgroundColor: '#DC143C', 
        borderRadius: 30, 
        height: 50, 
        width: 230,
        marginLeft: 70,
        marginTop: -10
    },
    btnTxt: {
        textAlign: 'center', 
        color: '#fff', 
        paddingTop: 15,
    },
    roomHeader: {
        color: '#DC143C',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default RoomInfo;
