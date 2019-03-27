/**
 * Created by user on 23.03.2019.
 */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default Button = ({title, color, textColor, onPress, style}) => (
    <TouchableOpacity activeOpacity={0.9} style={[{backgroundColor: color, borderRadius: 25, padding: 9}, style]} onPress={onPress}>
        <Text style={{color: textColor, textAlign: 'center'}}>{title}</Text>
    </TouchableOpacity>
)