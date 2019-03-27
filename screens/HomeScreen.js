/**
 * Created by user on 17.03.2019.
 */
import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, ActivityIndicator, TouchableOpacity} from 'react-native';
// import {Svg, Image} from 'react-native-svg'
import {ListItem, SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCount: 80,
            search: '',
            leagues: []
        }
    }

    componentDidMount() {
        this.props.getCompetitions(this.props.leagues.length);
    }

    updateSearch (text) {
        this.setState({search: text})
    }

    _renderLeaguesPending() {
        return (
            <View style={{marginTop: 20}}>
                <ActivityIndicator
                    size="small"
                />
            </View>
        )
    }

    _renderLeaguesList(leagues) {
        const leaguesOrder = ['FIFA World Cup', 'European Championship', 'UEFA Champions League', 'Premier League', 'Championship', 'Serie A', 'Primera Division', 'Bundesliga', 'Ligue 1', 'Eredivisie', 'Primeira Liga', 'Série A'];
        let sortedLeagues = leagues.sort((a, b) => leaguesOrder.indexOf(a.name) - leaguesOrder.indexOf(b.name));
        // leagues = !this.state.leagues.length ? leagues.slice(0, this.state.showCount) : this.state.leagues;
        return (
            <ScrollView style={styles.container} >
                {
                    sortedLeagues.map((league, key) => {
                        let props = {
                            title: league.name,
                            rightIcon: {name: 'chevron-right'},
                            containerStyle: styles.listItemStyle,
                            subtitle: league.area.name
                        };
                        // if (league.emblemUr !== '') {
                        //     props.leftAvatar = {source: {uri: league.logo}}
                        // }
                        // console.log(league);
                        return (
                            <TouchableOpacity key={key} onPress={() => {this.props.getMatches(league.id, league.currentSeason.currentMatchday); this.props.navigation.navigate('LeagueMatches', {title: league.fullName})}}>
                                <ListItem {...props}/>
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
                    !this.props.leagues.length ? this._renderLeaguesPending() : this._renderLeaguesList(this.props.leagues)
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
        leagues: state.leagues
    }
};

export default connect(mapStateToProps, actions)(HomeScreen);