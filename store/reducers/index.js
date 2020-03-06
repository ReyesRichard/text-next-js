import simpleReducer from './simple';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    simple: simpleReducer
});

export default rootReducer;