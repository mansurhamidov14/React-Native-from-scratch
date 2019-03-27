/**
 * Created by user on 18.03.2019.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';

class LeagueMatches extends Component {

    _renderEmpty () {
        return <View><Text style={{textAlign:'center'}}>No data</Text></View>
    }

    _renderMatches (matches) {
        console.log(matches);
        return (
            <ScrollView style={styles.container}>
                {
                    matches.map ((match, key) => {
                        return (
                            <View style={styles.listItemStyle} key={key}>
                                <View style={{flex: 1}}><Text style={[styles.teamTitle, styles.textRight]}>FT</Text></View>
                                <View style={{flex: 4}}><Text style={[styles.teamTitle, styles.textRight]}>{match.homeTeam.name}</Text></View>
                                <View style={{flex: 2}}><Text style={styles.scoreStyle}>{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</Text></View>
                                <View style={{flex: 5}}><Text style={[styles.teamTitle, styles.textLeft]}>{match.awayTeam.name}</Text></View>
                            </View>
                        );
                    })
                }

            </ScrollView>
        )
    }

    render () {
        return (
            this.props.matches.matches.length ? this._renderMatches(this.props.matches.matches) : this._renderEmpty()
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    listItemStyle: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    },
    teamTitle: {
        fontWeight: "normal",
        textAlign: "center",
        fontSize: 15,
    },
    textRight: {
        textAlign: 'right'
    },
    textLeft: {
        textAlign: 'left'
    },
    scoreStyle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "900"
    }
});

const mapStateToProps = state => {
    return {
        matches: state.matches
    }
};

export default connect(mapStateToProps, actions)(LeagueMatches);