import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { payemnt } from '../data/Data';

const PaymentMethod = ({route, navigation}) => {

    const { roomName, hotelName, address, phone, adults, children, adminUid, userUid, roomPrice, roomDescription, roomImage } = route.params;

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: '#DC143C', borderTopLeftRadius: 40, borderTopRightRadius: 40, height: '100%'}}>
                <View style={{marginTop: 50, marginLeft: 20, }}>
                    <View>
                        <AntDesign
                            name='closecircle'
                            size={24}
                            onPress={() => {}}
                            color='#fff'
                        />
                        
                    </View>
                    <View style={{marginTop: 30}}>

                    </View>
                </View>
               
                <View>
                    <FlatList
                        data={payemnt}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity style={{ height: 80, borderWidth: 1, margin: 10, borderRadius: 10, borderColor: '#fff', marginTop: 20}} onPress={() => navigation.navigate('Payment', {
                                    payemnt: item,

                                    adults: adults,
                                    children: children,

                                    adminUid: adminUid,
                                    roomName: roomName,
                                    hotelName: hotelName,
                                    address: address,
                                    phone: phone,
                                    userUid: userUid,
                                    roomDescription: roomDescription,
                                    roomPrice: roomPrice,
                                    roomImage: roomImage,
                                } )} >
                                    <Image
                                        source={item.method}
                                        style={{height:60, width: 100,borderRadius: 10, marginLeft: 20, borderWidth: 1, borderColor: '#fff', marginTop: 9}}
                                    />
                                </TouchableOpacity>
                            );
                        }}
                    />
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
        paddingTop: '25%',
        paddingLeft: '1%',
        paddingRight: '1%',
    }
})

export default PaymentMethod;
