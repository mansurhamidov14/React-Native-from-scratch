/**
 * Created by user on 22.03.2019.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import Row from '../components/Row';
import PinInput from '../components/PinInput';
import CircleIndicator from '../components/CircleIndicator';
import Button from '../components/Button';

const keyGroups = [
    [{number: 1, letter: ''}, {number: 2, letters: 'ABC'}, {number: 3, letters: 'DEF'}],
    [{number: 4, letters: 'GHI'}, {number: 5, letters: 'JKL'}, {number: 6, letters: 'MNO'}],
    [{number: 7, letters: 'PQRS'}, {number: 8, letters: 'TUV'}, {number: 9, letters: 'WXYZ'}],
    [{number: '0'}],
];
class LoginScreen extends Component {
    state = {
        userId: '',
        userFound: false

    };

    updatePin (number = false) {
        currentPin = this.state.userId;
        if (!number) {
              updatedPin = currentPin.slice(0, currentPin.length - 1);
            this.setState({userId: updatedPin, userFound: false});
        } else {
            if (currentPin.length < 6) {
                this.setState({userId: currentPin + number, userFound: currentPin.length === 5});
            }

        }
    }

    _renderUserInfo () {
        return (
            <View style={{flexDirection: 'row', height: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Avatar rounded source={require('../assets/avatar.jpg')} containerStyle={{borderWidth: 0.5, borderColor: '#333'}}/>
                <Text style={{textAlign: 'center', fontSize: 16, marginLeft: 10}}>Mansur Həmidov</Text>
            </View>
        )
    }

    _renderInputInfo () {
        return (
            <View style={{flexDirection: 'row', height: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: 16}}>MÜŞTƏRİ KODUNU DAXİL EDİN</Text>
            </View>
        )
    }

    _handleLogin () {
        if (!this.state.userFound) {
            return false;
        }
        this.props.navigation.navigate('Profile');
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <TouchableOpacity>
                        <Icon type="material" name={'chevron-left'} containerStyle={{marginLeft: -10}} size={30}/>
                    </TouchableOpacity>
                </View>

                <View>
                    {this.state.userFound ? this._renderUserInfo() : this._renderInputInfo()}
                    <View style={{paddingTop: 30}}>
                        <TouchableOpacity style={{paddingTop: 5, paddingBottom: 5}} onPress={() => this.updatePin()}  activeOpacity={0.8}>
                            <CircleIndicator
                                maxLength={6}
                                value={this.state.userId.length}
                                empty="#E7AD0F"
                                filled="#ffffff"
                                border="#333333"
                                size={13}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginBottom: 20}}>
                {
                    keyGroups.map((group, key) => {
                        return (
                            <Row key={key} style={{height: 80, alignItems: 'center'}}>
                                {
                                    group.map(key => {
                                        return <PinInput key={key.number} number={key.number} letters={key.letters} onKeyPress={() => this.updatePin(key.number)}/>
                                    })
                                }
                            </Row>
                        )
                    })
                }
                </View>
                <View style={{paddingLeft: 15, paddingRight: 15}}>
                    <Button title={this.state.userFound ? 'TƏSDİQ' : 'ŞİFRƏNİ DAXİL EDİN'} color="#444444" textColor="white" onPress={() => this._handleLogin()}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E7AD0F',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 25,
        paddingBottom: 15,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});

export default LoginScreen