import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {store, persistor} from './store';
import HomeScreen from './screens/HomeScreen';
import TeamsScreen from './screens/TeamsScreen';
import LeagueMatchesScreen from './screens/LeagueMatches';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import {Header} from 'react-native-elements';


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Teams: {
        screen: TeamsScreen
    },
    LeagueMatches: {
        screen: LeagueMatchesScreen
    },
    Login: {
        screen: LoginScreen
    },
    Profile: {
        screen: ProfileScreen
    }

    }, {
    headerMode: 'none',
        initialRouteName: 'Profile'
    });

const AppContainer = createAppContainer(AppNavigator);

export default () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <View style={styles.container}>
                {/*<Header*/}
                    {/*leftComponent={{ icon: 'menu', color: '#fff' }}*/}
                    {/*centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}*/}
                    {/*rightComponent={{ icon: 'home', color: '#fff' }}*/}
                {/*/>*/}
                <AppContainer/>
            </View>
        </PersistGate>
    </Provider>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
});
