/**
 * Created by user on 17.03.2019.
 */
import {combineReducers} from 'redux';
import leagues from './leagues';
import teams from './teams';
import matches from './matches';
export default combineReducers({leagues, teams, matches});
