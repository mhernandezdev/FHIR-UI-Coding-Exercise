import { combineReducers } from 'redux';
import { FETCH_PATIENT, FETCH_CONDITIONS } from '../actions';

function patient(state = null, action){
    console.log('action.payload', action.payload)
    switch(action.type){
        case FETCH_PATIENT:
            return action.payload || false;
        default:
            return state;
    }
}

function conditions(state = null, action){
    console.log('action.payload', action.payload)
    switch(action.type){
        case FETCH_CONDITIONS:
            return action.payload || false;
        default:
            return state;
    }
}

export default combineReducers({
    patient,
    conditions
})