import React, { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import { auth, db } from '../Firebase';

const SignUp = ({navigation}) => {

    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
         
    const registerUser = () => {
        if(!names || !email || !mobile || !password) {
            alert('Please add all the fields!')
            return
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {

                const user = userCredential.user;
                navigation.navigate('RandHotel', {userUid: user.uid})

                return(
                    db.collection('users').doc(user.uid).set({
                        userUid: user.uid,
                        names: names,
                        email: user.email,
                        mobile: mobile
                    })
                );
            // ....
        })
        .catch((error) => {
            alert('Something went wrong! : ' + error);
        });
    }

    return (
        <ImageBackground source={{uri:'https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}} style={{width: '100%', height: '100%'}}>
            <View style={styles.inner}>
                <View style={styles.inner2}>
                    <Text style={styles.text}>
                        REGISTER
                    </Text>

                    <View style={{marginTop: 40}}>
                        <View style={styles.input} >
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#FFF', padding:10}}>Full Names</Text>
                        <TextInput 
                            style={styles.inputBox} 
                            placeholder='John Doe'
                            value={names}
                            onChangeText={names => setNames(names)}
                            color='#FFF'
                        />
                    </View>

                    <View style={styles.input} >
                        <Text style={{paddingRight: 200, fontSize: 16, color: '#FFF', padding:10}}>Email Address</Text>
                        <TextInput
                            style={styles.inputBox} 
                            placeholder='johndoe@mail.com'
                            value={email}
                            onChangeText={email => setEmail(email)}
                            color='#FFF'
                        />
                    </View>

                    <View style={styles.input} >
                        <Text style={{paddingRight: 250, fontSize: 16, color: '#FFF', padding:10}}>Mobile</Text>
                        <TextInput 
                            style={styles.inputBox} 
                            placeholder='eg... 0781234567'
                            value={mobile}
                            onChangeText={mobile => setMobile(mobile)}
                            color='#FFF'
                        />
                    </View>

                    <View style={styles.input} >
                        <Text style={{paddingRight: 220, fontSize: 16, color: '#FFF', padding:10}}>Password</Text>
                        <TextInput 
                            style={styles.inputBox} 
                            placeholder='123456789' 
                            value={password}
                            onChangeText={password => setPassword(password)}
                            secureTextEntry
                            color='#FFF'
                        />
                    </View>
                </View>

                </View>
                    
                <View style={{paddingTop: 55}}>
                    <TouchableOpacity style={styles.touch1} onPress={registerUser}>
                        <Text style={styles.text2}>REGISTER</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', paddingLeft: 70, paddingTop: 10}}>
                        <Text style={{color: '#FFF', fontSize: 16}}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{color: '#FFBA00', fontSize: 16}}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
            </View>
        </ImageBackground> 
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner2: {
    marginTop: 50,
  },
  touch1: {
    backgroundColor: '#FFBA00',
    width: 230,
    borderRadius: 20,
    padding: 15,
    marginLeft: 60,
  },
  text: {
    color: '#FFBA00',
    fontSize: 40,
    paddingLeft: 30,
  },
  text2: {
    color: '#0C3B2E',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputBox: {
        width: '85%',
        borderWidth: 1,
        height: 50,
        borderRadius: 20,
        borderColor: '#FFF',
        paddingLeft: 15,
    },
});

export default SignUp
