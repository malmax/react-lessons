import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import blogsReducer from '../reducers/blogsReducer';

import BlogService from '../services/BlogService';

const reducer = combineReducers({
    blogsReducer,
});

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer, middleware);

export default store;