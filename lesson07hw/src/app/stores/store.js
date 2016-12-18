import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import blogs from '../reducers/blogsReducer';

const reducer = combineReducers({
    blogs,
});

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer, middleware);

export default store;

// загружаем первоначальные данные
