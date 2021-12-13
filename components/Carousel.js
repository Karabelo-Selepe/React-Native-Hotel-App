import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import CarouselItem from './CarouselItem';

const { width, height } = Dimensions.get('window');


function infiniteScroll(dataList, imgSlide) {
    const numberOfData = dataList.length;
    let scrollValue = 0, scrolled = 0

    setInterval(function() {
        scrolled++;

        if(scrolled < numberOfData) {
            scrollValue = scrollValue + width;
        } else {
            scrollValue = 0
            scrolled = 0
        }

        if(imgSlide.current) {
            imgSlide.current.scrollToOffset({ animated: true, offset: scrollValue });
        }
    
    }, 3000)
}

const Carousel = ({ data }) => {
    const imgSlide = useRef();

    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);

    const [dataList, setDataList] = useState(data);

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList, imgSlide)
    })

    if(data && data.length) {
        return (
            <View>
                <FlatList
                    data = {data}
                    ref = {imgSlide}
                    keyExtractor = {(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment = 'center'
                    scrollEventThrottle = {25}
                    decelerationRate = 'normal'
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item}) => {
                        return <CarouselItem item = {item} />
                    }}

                    onScroll = {Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />

                <View style = {styles.dotVIew}  >
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key = {i}
                                style = {{ opacity, height: 7, width: 7, backgroundColor: '#FFBA00', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }

    console.log('Please provide Images!')
    return null;
}

const styles = StyleSheet.create({
    dotVIew: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -30,
    }
})

export default Carousel;
