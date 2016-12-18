import * as constants from '../constants/Users';
import axios from 'axios';

export function loadUsers() {

    return function (dispatch) {
        dispatch({ type: constants.LOAD_USERS_START });

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then( response => {
                dispatch({ type: constants.LOAD_USERS_SUCCESS, payload: response.data });
                dispatch({ type: constants.LOAD_USERS_END });
            })
            .catch( error => {
                dispatch({ type: constants.LOAD_USERS_FAILURE, payload: error.message });
                dispatch({ type: constants.LOAD_USERS_END });
            });
    }
}