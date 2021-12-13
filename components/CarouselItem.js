import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
    return (
        <View style = {styles.cardView} >
            <Image style = {styles.image} source = {{uri: item.url}} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width,
        height: height / 3,
        backgroundColor: 'white',
        margin: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5
    },
    image: {
        width: width,
        height: height / 3,
    }
});

export default CarouselItem;
