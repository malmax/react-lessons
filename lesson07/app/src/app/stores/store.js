import { createStore, combineReducers,applyMiddleware } from 'redux'

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import articlesReducer from '../reducers/articlesReducer';
import usersReducer from '../reducers/usersReducer';

const reducer = combineReducers({
    users: usersReducer,
    articles: articlesReducer
});

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer,{users: [], articles:[]}, middleware)