/**
 * Created by user on 18.03.2019.
 */
import axios from '../axios';
import {getLeagueFixturesByMatchDay} from '../endpoints'
import {GET_MATCHES_RESOLVED, GET_MATCHES_REJECTED} from './types';

export const getMatches = (leagueId, matchDay) => {
    return dispatch => {
        dispatch({type: GET_MATCHES_REJECTED});
        axios.get(getLeagueFixturesByMatchDay(leagueId, matchDay))
            .then(response => {
                console.log(response.data);
                dispatch(getMatchesResolved(response.data));
            })
            .catch(err => {
                console.log(getLeagueFixturesByMatchDay(leagueId, matchDay), err);
                dispatch({type: GET_MATCHES_REJECTED});
            })
    }
};

const getMatchesResolved = (payload) => {
    return {
        type: GET_MATCHES_RESOLVED,
        payload
    }
};