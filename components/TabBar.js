/**
 * Created by user on 23.03.2019.
 */
import React from 'react';
import {View, Text} from 'react-native';

export default TabBar = ({title, focused}) => {
    return (
        <View style={{padding: 10, backgroundColor: focused ? '#E7AD0F' : '#333333', flex: 1}}>
            <Text style={{textAlign: 'center', color: focused ? '#333333' : '#FFFFFF'}}>{title}</Text>
        </View>
    )
}