import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    return (
        <ImageBackground source={{uri:'https://images.unsplash.com/photo-1554647286-f365d7defc2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'}} style={{width: '100%', height: '100%', }}>
            <View style={styles.inner}>
                <View style={styles.inner2}>
                  {/* <Text style={{color: '#fff', fontSize: 35, }}>
                        Best place to stay in good price
                    </Text> */}
                    <Text style={styles.text}>
                        Best place to stay in good price
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.touch1} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text2}>GET STARTED</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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
    width: '100%',
    height: '100%',
  },
  inner: {
    width: '100%',
    height: '54%',
    //backgroundColor: '#DC143C',
    marginTop: '90%',
    //opacity: 0.85,
    borderTopRightRadius: 75,
  },
  inner2: {
    margin: 30,
    marginTop: 50,
  },
  touch1: {
    margin: 30,
    backgroundColor: '#DC143C',
    width: 230,
    borderRadius: 20,
    padding: 15,
    marginLeft: '20%',
    elevation: 5
  },
  text: {
    color: '#DC143C',
    fontSize: 35,
    fontWeight: 'bold',
    //marginTop: -75
  },
  text2: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Home;
