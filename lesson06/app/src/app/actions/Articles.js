import {dispatcher} from '../dispatcher.js';
import {ADD_ARTICLE } from '../constants/Articles.js';
// 1
// export function addUser() {

// }

// 2
class ArticlesActions {
    addArticle(article) {
        debugger;

        dispatcher.dispatch({
            type: ADD_ARTICLE,
            payload: article
        });
    }
}

const articlesActions = new ArticlesActions;

export default articlesActions;