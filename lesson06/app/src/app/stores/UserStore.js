import {createStore, applyMiddlewar, combineReducers} from 'redux';
import {ADD_USER} from '../constants/USers.js';

const userReducer = function(state = {users: []}, action) {

    switch(action.type) {
        case ADD_USER: {
            let users = state.users.slice(0);
            users.push(action.payload);

            state = { ...state, users: users};
        }
    }

    return state;
}
const userStore = createStore(userReducer);

export default userStore;