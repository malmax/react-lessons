import actions from '../constants/articles.js';

export function articlesUser(article) {
    return {
        type: actions.CREATE_ARTICLE,
        payload: article
    }
}