/**
 * Created by user on 23.03.2019.
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ProfileNavigator from '../navigation/ProfileNavigator';

export default ProfileScreen = (props) => {
    return (
        <View style={styles.mainContainer}>
            <ProfileNavigator/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});