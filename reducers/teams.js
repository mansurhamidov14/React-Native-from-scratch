/**
 * Created by user on 17.03.2019.
 */
import {GET_TEAMS_LIST_RESOLVED, GET_TEAMS_LIST_REJECTED} from '../actions/types';

export default leagues = (state = [], action) => {
    switch (action.type) {
        case GET_TEAMS_LIST_RESOLVED:
            return action.payload;
        case GET_TEAMS_LIST_REJECTED:
            return [];
        default: return [];
    }
}