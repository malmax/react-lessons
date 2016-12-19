import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import blogs from '../reducers/blogsReducer';
import users from '../reducers/usersReducer';
import comments from '../reducers/commentsReducer';

const reducer = combineReducers({
    blogs,
    users,
    comments
});

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer, middleware);

export default store;

// Вопрос:
// при каждом монтировании BlogListPage через его конструктор происходи твызов метода loadBlogs
// хотя блоги уже были загружены при первом монтировании. Может стоит перенести dispatch(loadBlogs) сюда?
