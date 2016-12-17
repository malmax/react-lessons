import {
    CREATE_USER,
    LOAD_USERS_END,
    LOAD_USERS_START,
    LOAD_USERS_FAILURE,
    LOAD_USERS_SUCCESS
} from '../constants/users';
import axios from 'axios';

export function createUser(user) {
    return {
        type: CREATE_USER,
        payload: user
    };
}

export function loadUsers() {
    return function (dispatch) {
        dispatch({ type: LOAD_USERS_START });

        axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response) => {
                 dispatch({ type: LOAD_USERS_SUCCESS, payload: response.data });
                 dispatch({ type: LOAD_USERS_END });
             })
             .catch((err) => {
                 dispatch({ type: LOAD_USERS_FAILURE, payload: err });
                 dispatch({ type: LOAD_USERS_END });
             })
    }
}