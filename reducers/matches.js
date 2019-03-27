/**
 * Created by user on 18.03.2019.
 */
import {GET_MATCHES_REJECTED, GET_MATCHES_RESOLVED} from '../actions/types';

const initialState = {matches: []};
export default matches = (state = initialState, action) => {
    switch (action.type) {
        case GET_MATCHES_RESOLVED:
            return action.payload;
        case GET_MATCHES_REJECTED:
            return initialState;
        default: return state;
    }
}