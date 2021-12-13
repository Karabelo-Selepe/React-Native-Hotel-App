import React, { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import { auth } from '../Firebase';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
         
    const loginUser = () => {
        if(!email || !password) {
            alert('Please add all the fields!')
        }

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed In
                const user = userCredential.user;
                navigation.navigate('RandHotel', {userUid: user.uid})
                
                console.log('User signed in! : ' , user.uid) // Checking if it works

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
                        LOGIN
                    </Text>

                    <View style={{marginTop: 40}}>
                        <View style={styles.input} >
                            <Text style={{paddingRight: 210, fontSize: 16, color: '#DC143C', padding:10}}>Email Address</Text>
                            <TextInput 
                                style={styles.inputBox} 
                                placeholder='John Doe'
                                color='#DC143C'
                                onChangeText={email => setEmail(email)}
                            />
                        </View>

                        <View style={styles.input} >
                            <Text style={{paddingRight: 230, fontSize: 16, color: '#DC143C', padding:10}}>Password</Text>
                            <TextInput 
                                style={styles.inputBox} 
                                placeholder='123456789' 
                                color='#DC143C'
                                onChangeText={password => setPassword(password)}
                                secureTextEntry
                            />
                        </View>
                    </View>

                    </View>
                    
                <View style={{paddingTop: 55}}>
                    <TouchableOpacity style={styles.touch1} onPress={loginUser}>
                        <Text style={styles.text2}>LOGIN</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', paddingLeft: 80, paddingTop: 10}}>
                        <Text style={{color: '#FFF', fontSize: 16}}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{color: '#DC143C', fontSize: 16}}>SIGN UP</Text>
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
    //margin: 30,
    marginTop: 50,
  },
  touch1: {
    //margin: 30,
    backgroundColor: '#DC143C',
    width: 220,
    borderRadius: 20,
    padding: 15,
    marginLeft: 70,
  },
  text: {
    color: '#DC143C',
    fontSize: 40,
    paddingLeft: 30,
  },
  text2: {
    color: '#fff',
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

export default Login;
