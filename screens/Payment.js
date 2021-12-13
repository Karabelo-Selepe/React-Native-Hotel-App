import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { db, auth } from '../Firebase';

const Payment = ({route, navigation}) => {

    const { hotelName, roomName, address, phone, children, adults, adminUid, userUid, roomDescription, roomPrice, roomImage } = route.params;

    const [cardName, setCardName] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [cardExpDate, setCardExpDate] = useState();
    const [cardSeurityCode, setCardSecurityCode] = useState();

    const submitInfo = () => {
        try {
            const admin = auth?.currentUser?.uid;

            return (
                db.collection('users').doc(admin).update({
                    userUid: admin,
                    cardName: cardName,
                    cardNumber: cardNumber,
                    cardExpDate: cardExpDate,
                    cardSeurityCode: cardSeurityCode,
                    roomImage: roomImage,
                }).then(() => {
                     navigation.navigate('Summary',
                    {
                        name: cardName,
                        cardNumber: cardNumber,
                        date: cardExpDate,
                        code: cardSeurityCode,

                        adults: adults,
                        children: children,

                        adminUid: adminUid,
                        hotelName: hotelName,
                        roomName: roomName,
                        address: address,
                        phone: phone,
                        userUid: userUid,
                        roomDescription: roomDescription,
                        roomPrice: roomPrice,
                        roomImage: roomImage,
                    });
                }).catch((error) => {
                    alert('Something went wrong: ' + error);
                })
            );
        } catch(error) {
            alert('Faild to update Details: ' + error);
        }  
    }

    return (
        <View style={styles.container}>
                <View style={{marginTop: 50, marginLeft: 20}}>
                    <View>
                        <AntDesign
                            name='leftcircle'
                            size={24}
                            onPress={() => navigation.navigate('RoomList')}
                            color='#DC143C'
                        />
                        <Text style={{color: '#DC143C', fontSize: 20, marginLeft: 100,}}>Payment Details</Text> 
                    </View>
                    <View style={{marginTop: 50,}}>
                    </View>
                </View>
                
                <View>
                    <View style={styles.input} >
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#DC143C', padding:10}}>Name of Card</Text>
                        <TextInput 
                            style={styles.inputBox} 
                            placeholder='Card name'
                            value={cardName}
                            mode='outlined'
                            onChangeText={cardName => setCardName(cardName)}
                        />
                    </View>

                    <View style={styles.input} >
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#DC143C', padding:10}}>Card Number</Text>
                        <TextInput
                            style={styles.inputBox} 
                            placeholder='123-456-789-012'
                            value={cardNumber}
                            mode='outlined'
                            onChangeText={cardNumber => setCardNumber(cardNumber)} 
                        />
                    </View>

                    <View style={styles.input} >
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#DC143C', padding:10}}>Expiration Date</Text>
                        <TextInput 
                            style={styles.inputBox} 
                            placeholder='03/10'
                            value={cardExpDate}
                            mode='outlined'
                            onChangeText={cardExpDate => setCardExpDate(cardExpDate)} 
                        />
                    </View>

                    <View style={styles.input} >
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#DC143C', padding:10}}>Security Code</Text>
                        <TextInput 
                            style={styles.inputBox} 
                            placeholder='123' 
                            value={cardSeurityCode}
                            mode='outlined'
                            onChangeText={cardSeurityCode => setCardSecurityCode(cardSeurityCode)}
                        />
                    </View>
                </View>
                <View style={{marginTop: 80}}>
                    <TouchableOpacity style={styles.btn}  onPress={submitInfo}>
                        <Text style={styles.btnTxt}>Confirm Payment</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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
        backgroundColor: '#DC143C', 
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

export default Payment;
