import * as constants from '../constants/Comments';
import axios from 'axios';

export function loadCommentsForPost(postId = 1) {
    return function (dispatch) {
        dispatch({ type: constants.LOAD_COMMENTS_START });

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then( response => {
                dispatch({ type: constants.LOAD_COMMENTS_SUCCESS, payload: response.data });                
            })
            .catch( error => {
                console.error(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, error.message);
                dispatch({ type: constants.LOAD_COMMENTS_FAILURE, payload: error.message });                
            });
    }
}

export function loadAllComments() {
    return function (dispatch) {
        dispatch({ type: constants.LOAD_ALL_COMMENTS_START });

        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then( response => {
                dispatch({ type: constants.LOAD_ALL_COMMENTS_SUCCESS, payload: response.data });
                dispatch({ type: constants.LOAD_ALL_COMMENTS_END });
            })
            .catch( error => {
                dispatch({ type: constants.LOAD_ALL_COMMENTS_FAILURE, payload: error.message });
                dispatch({ type: constants.LOAD_ALL_COMMENTS_END });
            });
    }
}