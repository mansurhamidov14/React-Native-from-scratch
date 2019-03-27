/**
 * Created by user on 23.03.2019.
 */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

export default ProfileHeader = (props) => {
    return (
        <View style={{flexDirection: 'row', flex: 1, height: 20, justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15, paddingRight: 15}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Avatar rounded source={props.avatarSrc} containerStyle={{borderWidth: 0.5, borderColor: '#333'}}/>
                <Text style={{textAlign: 'center', fontSize: 14, marginLeft: 10}}>{props.userName}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 15}}>
                <TouchableOpacity style={{paddingLeft: 6, paddingRight: 6}}><Icon type="font-awesome" name="envelope" size={20}/></TouchableOpacity>
                <TouchableOpacity style={{paddingLeft: 6, paddingRight: 6}}><Icon type="font-awesome" name="pencil" size={20}/></TouchableOpacity>
            </View>
        </View>
    );
}
