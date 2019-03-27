/**
 * Created by user on 22.03.2019.
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';

export default Row = (props) => {
    return (
        <View style={[{flexDirection: 'row', justifyContent: 'center'}, props.style]}>
            {props.children}
        </View>
    )
};

