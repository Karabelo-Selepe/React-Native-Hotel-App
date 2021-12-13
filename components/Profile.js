import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { db } from '../Firebase';

const Profile = ({navigation, route}) => {
    const { userUid } = route.params;

    const [user, setUser] = useState(null);

    const getUsers = async () => {

        const querySnap = await db.collection('users').where('userUid', '==', userUid).get();
        const allUsers = querySnap.docs.map(docSnap => docSnap.data());

        setUser(allUsers);
    }
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: '#F08080', justifyContent: 'center', alignItems: 'center', height: '25%'}}>
                <Text style={{ fontSize: 16, color: '#FFF', fontWeight: 'bold'}}>MY INFORMATION</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10, flex: 1}}>
                <FlatList
                    data={user}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.uid}
                    renderItem={({item}) => { 
                        return (
                            <View style={{flex: 1}}>
                                <View style={{paddingTop: '5%'}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile', {userUid: userUid})}>
                                        <View style={{borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#F08080',  marginHorizontal: 10, }}>
                                            <Text style={{paddingRight: 220, fontSize: 16, color: '#F08080', padding:10, fontWeight: 'bold'}}>Personal Details</Text>
                                            <Text style={{paddingRight: 220, fontSize: 16, color: '#C1C1C1', paddingLeft:10, paddingBottom: 10, width: '100%'}}>{item.names}</Text>
                                            <Text style={{paddingRight: 220, fontSize: 16, color: '#C1C1C1', paddingLeft:10, paddingBottom: 10, width: '100%'}}>{item.email}</Text>
                                            <Text style={{paddingRight: 220, fontSize: 16, color: '#C1C1C1', paddingLeft:10, paddingBottom: 10, width: '100%'}}>{item.mobile}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{borderBottomWidth: 1, borderColor: '#F08080',  marginHorizontal: 10, }}>
                                        <Text style={{paddingRight: 220, fontSize: 16, color: '#F08080', padding:10, fontWeight: 'bold'}}>Card Details</Text>
                                        <Text style={{paddingRight: 220, fontSize: 16, color: '#C1C1C1', paddingLeft:10, paddingBottom: 10, width: '100%'}}>{item.cardName}</Text>
                                        <Text style={{paddingRight: 220, fontSize: 16, color: '#C1C1C1', paddingLeft:10, paddingBottom: 10, width: '100%'}}>{item.cardNumber}</Text>
                                        <Text style={{paddingRight: 220, fontSize: 16, color: '#C1C1C1', paddingLeft:10, paddingBottom: 10, width: '100%'}}>{item.cardExpDate}</Text>
                                    </View>
                                </View>
                            </View>       
                        );
                    }}
                />
                <View style={styles.Tab}>
                <View>
                    <FontAwesome name="home" size={32} color='#FFF' onPress = {() => navigation.navigate('RandHotel', {userUid: userUid})}/>
                </View>
                <View>
                    <FontAwesome name="user-circle-o" size={28} color='#DC143C' style={{marginLeft: 120}} onPress = {() => navigation.navigate('UserProfile', {userUid: userUid})}/>
                </View>
            </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 200,
    borderWidth: 2,
    backgroundColor: "gray"
    },
    input: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10
    },
    inputBox: {
        width: '85%',
        borderWidth: 1,
        height: 50,
        borderColor: '#BB8A52',
        paddingLeft: 15,
        borderRadius: 10,
    },
    Tab: {
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        width: 360,
        backgroundColor: '#F08080',
        padding: 20,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0, 
    },
});

export default Profile;
