/**
 * Created by user on 17.03.2019.
 */
import axios from '../axios';
import {GET_COMPETITIONS_LIST_RESOLVED, GET_COMPETITIONS_LIST_REJECTED} from './types';
import {leaguesEndpoint} from '../endpoints';


export const getCompetitions = (competitionsLength, forcedGet = false) => {
    return dispatch => {
        if (!competitionsLength || forcedGet) {
            axios.get(leaguesEndpoint)
                .then(response => {
                    dispatch(getCompetitionsResolved(response.data.competitions));
                })
                .catch(err => {
                    console.log(err);
                    dispatch(getCompetitionsRejected());
                })
        } else {
            dispatch(getCompetitionsRejected());
        }
    }
};

const getCompetitionsResolved = (payload) => {
    return {
        type: GET_COMPETITIONS_LIST_RESOLVED,
        payload
    }
};

const getCompetitionsRejected = () => {
    return {
        type: GET_COMPETITIONS_LIST_REJECTED
    }
};
