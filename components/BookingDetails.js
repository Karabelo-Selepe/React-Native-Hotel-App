import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BookingDetails = ({route, navigation}) => {

    const { userUid, name, cardNumber, date, code, adults, children, hotelName, adminUid, phone, address, roomName, names } = route.params;

    return (
        <View style={styles.container}>
                {/* Hearder view */}
                <View style={{marginTop: 50, marginLeft: 30}}>
                    <View>
                        <AntDesign
                            name='leftcircle'
                            size={24}
                            onPress={() => navigation.navigate('RoomList')}
                            color='#BB8A52'
                        />
                        <Text style={{color: '#000', fontSize: 20, marginLeft: 110, }}>{names}'s Summary</Text> 
                    </View>
                    <View style={{marginTop: 50,}}>
                    </View>
                </View>

                <View style={{}}>
                    <View style={{borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'lightgrey',  marginHorizontal: 10}}>
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#0C3B2E', padding:10, fontWeight: 'bold'}}>Card</Text>
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#C1C1C1', paddingLeft:10, paddingBottom: 10}}>{cardNumber}</Text>
                    </View>

                    <View style={{width: 440, borderBottomWidth: 1, marginHorizontal: 10, borderColor: 'lightgrey'}}>
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#0C3B2E', padding:10, fontWeight: 'bold'}}>Booking Hotel Name & Address</Text>
                        <Text style={{paddingRight: 220, fontSize: 14, color: '#BB8A52', paddingLeft:10, }}>{hotelName}</Text>
                        <Text style={{paddingRight: 220, fontSize: 14, color: '#BB8A52', paddingLeft: 20, fontStyle: 'italic'}}>{roomName}</Text>
                        <Text style={{paddingRight: 220, fontSize: 14, color: '#BB8A52', paddingLeft: 20, fontStyle: 'italic'}}>{address}</Text>
                        <Text style={{paddingRight: 220, fontSize: 14, color: '#BB8A52', paddingLeft: 20, paddingBottom: 10, fontStyle: 'italic'}}>{phone}</Text>
                    </View>

                    <View style={{width: 440, borderBottomWidth: 1,  marginHorizontal: 10, borderColor: 'lightgrey'}}>
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#0C3B2E', padding:10, fontWeight: 'bold'}}>Booking Details</Text>
                        <Text style={{paddingRight: 220, fontSize: 14, color: '#BB8A52', paddingLeft:20}}>Check-in: 18 October 2021</Text>
                        <Text style={{paddingRight: 220, fontSize: 14, color: '#BB8A52', paddingLeft:20}}>Check-out: 20 October 20219</Text>
                        <Text style={{paddingRight: 220, fontSize: 14, color: '#BB8A52', paddingLeft:20}}>{adults} Adults</Text>
                        <Text style={{paddingRight: 220, fontSize: 14, color: '#BB8A52', paddingLeft:20, paddingBottom: 10}}>{children} Children</Text>
                    </View>
                </View>

                {/* button */}
                <View style={{marginTop: 80}}>
                    <TouchableOpacity style={styles.btn}  onPress={submitInfo} >
                        <Text style={styles.btnTxt}>Book</Text>
                    </TouchableOpacity>
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
    btn: {
        backgroundColor: '#BB8A52', 
        borderRadius: 30, 
        width: 230,
        marginLeft: 70,
        marginTop: 300,
    },
    btnTxt: {
        textAlign: 'center', 
        color: '#fff', 
        paddingTop: 15,
    },
    input: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputBox: {
        width: '90%',
        borderWidth: 1,
        height: 50,
        borderRadius: 20,
        borderColor: '#C1C1C1',
        paddingLeft: 15
    },
     btn: {
        backgroundColor: '#BB8A52', 
        borderRadius: 30, 
        height: 50, 
        width: 230,
        marginLeft: 70,
    },
    btnTxt: {
        textAlign: 'center', 
        color: '#fff', 
        paddingTop: 15,
    },
});

export default BookingDetails;
