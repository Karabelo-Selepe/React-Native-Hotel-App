import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import Carousel from '../components/Carousel';
import { bayHotelDummyData } from '../data/Data';
import { db } from '../Firebase';
import { FontAwesome } from '@expo/vector-icons';

//import { dummtyHotelData } from '../data/Data';

const HotelInfo = ({route, navigation}) => {

    const [hotel, setHotel] = useState('');
    const { adminUid, userUid } = route.params;

    useState(() => {
        let { hotel } = route.params;
        console.log(adminUid)
        setHotel(hotel)
    }, [hotel])


    return (
        <View style={{flex: 1, width: '100%', height: '100%', paddingTop: '5%', backgroundColor: '#fff'}}>
            <Carousel data = {bayHotelDummyData} />

            <Text style={{paddingTop: 20, textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#DC143C'}}>{ hotel.hotelName }</Text>
            
            <SafeAreaView style={{flex: 1, }}>
                <ScrollView style={{margin:10, }} showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={{fontSize: 16, color: '#F08080', fontWeight: 'bold', textAlign: 'center'}}>{ hotel.hotelInfo }</Text>
                        {/* <Text style={{fontSize: 16, color: '#0C3B2E', textAlign: 'center'}}>{ dummtyHotelData.sectionA }</Text>
                        <Text style={{fontSize: 16, color: '#0C3B2E', textAlign: 'center', marginTop:5}}>{ dummtyHotelData.sectionB }</Text>
                        <Text style={{fontSize: 16, color: '#0C3B2E', textAlign: 'center', marginTop:5}}>{ dummtyHotelData.sectionC }</Text> */}
                        <Text style={{fontSize: 16, color: '#F08080', textAlign: 'center', marginTop:5}}>{ hotel.adminEmail }</Text>
                        {/* <Text style={{fontSize: 16, color: '#0C3B2E', textAlign: 'center', marginTop:5}}>{ dummtyHotelData.sectionD }</Text> */}
                    </View>
                    <View>
                          <TouchableOpacity style={styles.btnBG} onPress={() => navigation.navigate('RoomList', 
                            {
                                hotelName: hotel.hotelName,
                                address: hotel.hotelAddress,
                                phone: hotel.hotelNumber,
                                adminUid: adminUid,
                                userUid: userUid,
                            }
                        )}>
                            <Text style={styles.btn}>VIEW ROOMS</Text>
                        </TouchableOpacity>
                    </View>
                  
                </ScrollView>
            </SafeAreaView>
            
            <View style={{flex: 0.1, marginTop: 50}}>
                
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
    btn: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnBG: {
        marginTop: 40,
        backgroundColor: '#DC143C',
        width: 230,
        borderRadius: 20,
        padding: 15,
        marginLeft: 70,
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

export default HotelInfo;
