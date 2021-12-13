import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Image, Text } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, } from '@expo/vector-icons';

import { auth, db } from '../Firebase';

const UserProfile = ({navigation, route}) => {

    const { userUid } = route.params;

    // ...
    const SignOut = () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            navigation.replace('Login');

        }).catch((error) => {
            // An error happened
            alert('Somehing went wrong! - ' + error);
        });
    }

    // ... flatlist
    const [user, setUser] = useState(null);

    const getHotels = async () => {

        const querySnap = await db.collection('users').where('uid', '==', userUid).get();
        const allUsers = querySnap.docs.map(docSnap => docSnap.data());

        setUser(allUsers);
    }
    useEffect(() => {
        getHotels();
    }, [])

    // ...
    const RenderUsers = ({item}) => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center'}} >
                <View>
                    <Image source={{uri: item.userImage}} style={styles.img} />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}} >
                    <Text style={{color: '#FFF', fontWeight: 'bold' }}>{item.names}</Text>
                    <Text style={{color: '#FFF', fontWeight: 'bold' }}>{item.email}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={{paddingTop: '15%', backgroundColor: '#F08080', height: '40%'}}>
                    
                        <FlatList
                            data={user}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.uid}
                            renderItem={({item}) => { return <RenderUsers item={item}/> }}
                        />
                    
            </View>

            <View style={{backgroundColor: '#FFF', paddingBottom: 155, paddingTop: 70}}>
                
                <View style={{ paddingLeft: '22%',  }}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Bookings', {userUid: userUid})}>
                        <View style={styles.tbRoom} >
                            <MaterialCommunityIcons name="format-list-text" size={20} color='#F08080'/>
                            <Text style={{paddingLeft: '5%', color: '#F08080'}}>BOOKINGS</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingTop: 10, width: '100%'}} onPress={() => navigation.navigate('Profile', {userUid: userUid})}>
                        <View style={styles.tbRoom} >
                            <FontAwesome name="user-circle-o" size={20} color='#F08080' />
                            <Text style={{paddingLeft: '5%', color: '#F08080'}}>PROFILE</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingTop: 10, }} onPress={SignOut}>
                        <View style={styles.tbRoom} >
                            <MaterialCommunityIcons name="logout" size={20} color='#F08080' />
                            <Text style={{paddingLeft: '5%', color: '#F08080'}}>LOGOUT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Tab}>
                <View>
                    <FontAwesome name="home" size={32} color='#FFF' onPress = {() => navigation.navigate('RandHotel', {userUid: userUid})}/>
                </View>
                <View>
                    <FontAwesome name="user-circle-o" size={28} color='#DC143C' style={{marginLeft: 180}} onPress = {() => navigation.navigate('UserProfile', {userUid: userUid})}/>
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
        backgroundColor: '#fff',
        paddingTop: '5%'
    },
    Tab: {
        justifyContent: 'center', alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        width: 360,
        backgroundColor: '#F08080',
        padding: 20,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0, 
    },
    tbRoom: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#F08080',
        borderRadius: 10,
        width: '75%',
        paddingLeft: '20%',
        paddingVertical: 20,
  },
  row: {
    paddingLeft: 10,
  },
  img: { 
        width: 140, 
        height: 140,
        borderRadius: 140/2,
           
    },
});

export default UserProfile;