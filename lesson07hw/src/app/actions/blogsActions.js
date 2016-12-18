import * as constants from '../constants/Blogs';
import axios from 'axios';

export function addBlog(newBlog) {
    return {
        type: constants.ADD_BLOG,
        payload: newBlog
    }
}

export function removeBlog(blogId) {
    return {
        type: constants.DELETE_BLOG,
        payload: blogId
    }
}

export function editBlog(editedBlog) {
    return {
        type: constants.EDIT_BLOG,
        payload: editedBlog
    }
}

export function toggleModalForm(blogId = null) {
    return {
        type: constants.TOGGLE_EDIT_MODAL,
        payload: blogId
    }
}

export function loadBlogs() {
    // Вопрос к преподавателю:
    // зачем нужно возвращать именно функцию?
    return function (dispatch) {
        dispatch({ type: constants.LOAD_BLOGS_START });

        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then( response => {
                dispatch({ type: constants.LOAD_BLOGS_SUCCESS, payload: response.data });
                dispatch({ type: constants.LOAD_BLOGS_END });
            })
            .catch( error => {
                dispatch({ type: constants.LOAD_BLOGS_FAILURE, payload: error.message });
                dispatch({ type: constants.LOAD_BLOGS_END });
            });
    }
}