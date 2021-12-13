import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HotelItem = ({item, navigation}) => { 

    return (
        <>
        <TouchableOpacity onPress={() => navigation.navigate('HotleInfo')} >
            <View style={styles.inner}>
                <Image 
                    source={{uri: item.url}} j
                    style={styles.img}
                    resizeMode='stretch' 
                />

                <Text style={styles.textHeader2}> {item.title} </Text>
                <Text style={styles.textAddress}> {item.address} </Text>
                <Text style={styles.textNumber}> {item.mobile} </Text>
                <Text style={styles.textNumber}>5-star hotel</Text>
            </View>
        </TouchableOpacity>
        </>
    );
}

 // const pressHandler = ({id, navigation}) => {
    //     console.log(id);
        
    // }

const styles = StyleSheet.create({
    textHeader: {
        color: '#0C3B2E',
        fontSize: 20,
        margin: 10,
        marginTop: 30,
        fontWeight: 'bold',
    },
    textHeader2: {
        color: '#0C3B2E',
        fontSize: 16,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    textAddress: {
        color: '#FFBA00',
        fontSize: 12,
        marginLeft: 20,
        fontStyle: 'italic',
    },
    textNumber: {
        color: '#0C3B2E',
        fontSize: 12,
        marginLeft: 20,
        fontStyle: 'italic',
    },
     inner: {
        flex: 1,
        marginLeft: 15,
        marginTop: 15,
        width: 330,
        height: 240,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 5,
    },
    img: { 
        width: 330, 
        height: 145,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }
});

export default HotelItem;