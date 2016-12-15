import actions from '../constants/articles';

export default function articlesReducer(state, action) {
    switch(action.type) {

        case actions.CREATE_ARTICLE: {
            let articles = state.articles.slice(0);
            articles.push(action.payload);

            state = { ...state, articles }
        }
        
    }

    return state;
}