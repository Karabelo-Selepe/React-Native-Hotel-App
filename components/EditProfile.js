import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';

import { auth, db, storageRef, } from '../Firebase';

const EditProfile = ({navigation, route}) => {

    const { userUid } = route.params

    //... Updating details of the user
    const [image, setImage] = useState('');
    const [names, setNames] = useState('');
    const [mobile, setMobile] = useState('');

    const UpdateUserDetails = async () => {
        try {
            const admin = auth?.currentUser?.uid;

            return (
                db.collection('users').doc(admin).update({
                    uid: admin,
                    names: names,
                    userImage: image,
                    mobile: mobile,
                }).then(() => {
                    navigation.navigate('UserProfile', {userUid: userUid})
                }).catch((error) => {
                    alert('Something went wrong: ' + error);
                })
            );
        }catch(error) {
            alert('Faild to update Details: ' + error);
        }
    }

    // ... picking image from device and storing it to firebase storage
   const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        if (!result.cancelled) {
        setImage(result.uri);
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
            resolve(xhr.response);
            };
            xhr.onerror = function () {
            reject(new TypeError("Network request failed!"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", result.uri, true);
            xhr.send(null);
        });

        const ref = storageRef.child(new Date().toISOString());
        const snapshot = (await ref.put(blob)).ref
            .getDownloadURL()
            .then((imageUrl) => {
            setImage(imageUrl);

            blob.close();
            });
        }
    }; //... close tag

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: '#F08080', justifyContent: 'center', alignItems: 'center', height: '25%'}}>
                <Text></Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                        <View>
                            <TouchableOpacity  onPress={pickImage}>
                                <Image style={styles.image} source={{uri: image}} value={image}/>
                                <FontAwesome name="camera" size={24} color='#F08080' style={{marginLeft: 80, marginTop: -22}}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.input} >
                            <TextInput 
                                style={styles.inputBox} 
                                placeholder='Full Names'
                                color='#F08080'
                                value={names}
                                onChangeText={names => setNames(names)}
                            />
                        </View>

                        <View style={styles.input} >
                            <TextInput 
                                style={styles.inputBox} 
                                placeholder='Mobile Number'
                                color='#F08080'
                                value={mobile}
                                onChangeText={mobile => setMobile(mobile)}
                            />
                        </View>
                <View style={{ paddingTop: '40%'}}>
                    <TouchableOpacity style={styles.touch1} onPress={UpdateUserDetails}>
                        <Text style={styles.text2}>Update Profile</Text>
                    </TouchableOpacity>
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
        borderColor: '#F08080',
        paddingLeft: 15,
        borderRadius: 10,
    },
     touch1: {
        backgroundColor: '#F08080',
        width: 220,
        borderRadius: 20,
        padding: 15,
        
    },
    text2: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default EditProfile;
