import actions from '../constants/users.js';

export function articlesUser(user) {
    return {
        type: actions.CREATE_USER,
        payload: user
    }
}