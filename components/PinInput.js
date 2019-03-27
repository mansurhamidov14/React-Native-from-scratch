/**
 * Created by user on 22.03.2019.
 */
import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

const keyColor = '#333333';

export default Key = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.35} style={styles.keyContainer} onPress={props.onKeyPress}>
            <View style={styles.key}>
                <Text style={[styles.keyText, styles.number]}>{props.number}</Text>
                {props.letters ? <Text style={[styles.keyText, styles.letters]}>{props.letters}</Text> : null}
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    keyContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    key: {
        flexDirection: 'column',
        borderRadius: 70,
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: keyColor,
        justifyContent: 'center'
    },
    keyText: {
        color: keyColor,
        textAlign: 'center'
    },
    number: {
        marginTop: -5,
        fontSize: 40
    },
    letters: {
        marginTop: -10,
        fontSize: 11
    }
});