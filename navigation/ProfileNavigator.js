/**
 * Created by user on 23.03.2019.
 */
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../screens/profile/Main'

const ProfileNavigator = createStackNavigator({
    Main: MainScreen,
});

export default createAppContainer(ProfileNavigator);