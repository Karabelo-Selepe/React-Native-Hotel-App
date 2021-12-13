import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import HotelItem from './HotelItem';

const Hotel = ({data}) => {
    const [hotels, setHotels] = useState(data);
    
    return (
            <View>
                <FlatList
                    data={hotels}
                    keyExtractor={(item) => item.id}
                    
                    renderItem={({item}) => {
                        return <HotelItem item = {item} />
                    }}
                />
            </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
export default Hotel;

