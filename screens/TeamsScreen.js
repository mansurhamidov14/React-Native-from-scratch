/**
 * Created by user on 17.03.2019.
 */
import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions';

class TeamsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
    }

    _renderTeamsPending() {
        return (
            <View style={{marginTop: 20}}>
                <ActivityIndicator
                    size="small"
                />
            </View>
        )
    }

    _renderTeamsList(teams) {
        return (
            <ScrollView style={styles.container} >
                {
                    teams.map((team, key) => {
                        return (
                            <TouchableOpacity key={key}>
                                <ListItem
                                    title={team.name}
                                    subtitle={team.defaultHomeVenue ? team.defaultHomeVenue.name : null}
                                    rightIcon={{name: 'chevron-right'}}
                                    containerStyle={styles.listItemStyle}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    !this.props.teams.length ? this._renderTeamsPending() : this._renderTeamsList(this.props.teams)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    listItemStyle: {
        borderBottomWidth: 1,
        borderColor: '#eaeaea',
        height: 50,
        paddingTop: 8,
        paddingBottom: 7
    }
});

const mapStateToProps = state => {
    return {
        teams: state.teams
    }
};

export default connect(mapStateToProps, actions)(TeamsScreen);