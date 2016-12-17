import { CREATE_ARTICLE } from '../constants/articles'

export default function articlesReducer(state = { articles: [] }, action) {
    switch(action.type) {
        case CREATE_ARTICLE: {
            let articles = state.articles.slice(0);
            articles.push(action.payload);

            state = { ...state, articles };
        }
    }

    return state;
}