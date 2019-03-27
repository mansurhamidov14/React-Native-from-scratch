/**
 * Created by user on 22.03.2019.
 */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Row from './Row';

export default CircleIndicators = ({maxLength, value, border, filled, empty, size = 13}) => {
    const circleArray = [];

    for (let i = 1; i<= maxLength; i++) {
        circleArray.push(i);
    }
    return (
        <Row>
            {
                circleArray.map(index => {
                    return (
                        <View key={index} style={{flexDirection: 'row', marginLeft: 12, marginRight: 12, width: size, height: size, borderRadius: size, borderWidth: 1, backgroundColor: index <= value ? filled : empty, borderColor: index <= value ? filled : border}}/>
                    )
                })
            }
        </Row>
    );
}
