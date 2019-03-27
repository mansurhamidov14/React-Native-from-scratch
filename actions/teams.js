/**
 * Created by user on 17.03.2019.
 */
import axios from 'axios';
import {getTeamsUrlByLeague} from '../endpoints';
import {GET_TEAMS_LIST_RESOLVED, GET_TEAMS_LIST_REJECTED} from './types';

export const getTeamsList = (leagueId) => {
    return dispatch => {
        dispatch(getTeamsListResolved([]));
        axios.get(getTeamsUrlByLeague(leagueId))
            .then(response => {
                console.log('requested');
                dispatch(getTeamsListResolved(response.data));
            })
            .catch(err => {
                dispatch({type: GET_TEAMS_LIST_REJECTED});
            });
    }

};

const getTeamsListResolved = (payload) => {
    return {
        type: GET_TEAMS_LIST_RESOLVED,
        payload
    }
};