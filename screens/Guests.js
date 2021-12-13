import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { AntDesign, Octicons } from '@expo/vector-icons';

const Guests = ({route, navigation}) => {

    const { roomDescription, hotelName, phone, address, adminUid, roomName, userUid, roomPrice, roomImage } = route.params;

    //... Date Picker
    const [date, setDate] = useState(new Date());
    //const [dateIn, setDateIn] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState(false);

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'Android');
    //     setDate(currentDate);

    //     const tempDate = new Date(currentDate);
    //     const fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    //     setText(fDate)
    // };

    const onChange = (selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'Android');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    //... Number of Guests
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    //const [room, setRoom] = useState(0);

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#DC143C', borderTopLeftRadius: 40, borderTopRightRadius: 40, height: '100%', }}>
                <View style={{margin: 20}}>
                     <AntDesign
                        name='closecircle'
                        size={24}
                        onPress={() => navigation.navigate('RoomList', {})}
                        color='#fff'
                    /> 
                </View>
               
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: '15%', marginHorizontal: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
                    <View>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Adults</Text>
                        <Text style={{color: '#F08080'}}>Ages 13 or above</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setAdults(Math.max(0, adults - 1))}
                            style={styles.button}
                        > 
                            <Text style={{color: '#fff',}} >-</Text>
                        </Pressable>

                        <Text style={{color: '#fff', marginHorizontal: 15, fontSize: 16}}>{adults}</Text>

                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}
                        > 
                            <Text style={{color: '#fff',}}>+</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Number of children */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginHorizontal: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
                    <View>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Children</Text>
                        <Text style={{color: '#F08080'}}>Ages 2 - 12</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setChildren(Math.max(0, adults - 1))}
                            style={styles.button}
                        > 
                            <Text style={{color: '#fff',}}>-</Text>
                        </Pressable>

                        <Text style={{color: '#fff', marginHorizontal: 15, fontSize: 16}}>{children}</Text>

                        <Pressable
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}
                        > 
                            <Text style={{color: '#fff',}}>+</Text>
                        </Pressable>
                    </View>
                </View>

                {/* <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginHorizontal: 20, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Rooms</Text>
                        <Text style={{color: '#8d8d8d'}}>Number of rooms</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setRoom(Math.max(0, room - 1))}
                            style={styles.button}
                        > 
                            <Text>-</Text>
                        </Pressable>

                        <Text style={{marginHorizontal: 15, fontSize: 16}}>{room}</Text>

                        <Pressable
                            onPress={() => setRoom(room + 1)}
                            style={styles.button}
                        > 
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View> */}

                {/* Date Picker */}
                <View style={{flexDirection: 'row', padding: 20, marginHorizontal: 30, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
                    
                    <View>
                        <Octicons name="calendar" size={30} color="#fff"/>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => showMode('date')} >
                            <Text style={{paddingLeft: '10%', marginTop: '5%', color: '#fff', fontSize: 16, fontWeight: "bold", }}>Check-in date</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
                <View>
                     <Text style={{color: '#0C3B2E', marginHorizontal: 15, fontSize: 16}}>{text}</Text>
                </View>

                {/* <View style={{flexDirection: 'row', padding: 20, marginHorizontal: 30, borderBottomWidth: 1, borderColor: 'lightgrey'}}>
                    
                    <View>
                        <Octicons name="calendar" size={30} color="#0C3B2E"/>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => showMode('date')} >
                            <Text style={{paddingLeft: '10%', marginTop: '5%', color: '#0C3B2E', fontSize: 16, fontWeight: "bold", }}>Check-out date</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View> */}
                    
                <View style={{alignItems: 'center', paddingTop: '30%'}}>
                    <TouchableOpacity style={styles.btn}  onPress={()=> navigation.navigate('RoomInfo', {
                        roomName: roomName,
                        adults: adults,
                        children: children,

                        roomDescription: roomDescription,
                        hotelName: hotelName,
                        address: address,
                        phone: phone,
                        adminUid: adminUid,
                        userUid: userUid,
                        roomPrice: roomPrice,
                        date: date,
                        roomImage: roomImage,
                    })}>
                        <Text style={styles.btnTxt}>Check Availability</Text>
                    </TouchableOpacity>
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
    },
    displayView: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#fff', 
        borderRadius: 30, 
        height: 30, 
        width: 130,
    },
    btnTxt: {
        textAlign: 'center', 
        color: '#DC143C', 
        paddingTop: 6
    },
    roomHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }, 
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15, 
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
    },
});

export default Guests;
