import {combineReducers} from 'redux';
import DataReducers from './DataReducer';

export default combineReducers({
    Data : DataReducers
});