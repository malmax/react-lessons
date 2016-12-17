import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import articles from '../reducers/articlesReducer';
import users from '../reducers/usersReducer';

const reducer = combineReducers({
    users,
    articles
});

// const logger_ = 
//         (store) => 
//             (next) => 
//                 (action) => {
//                     console.log(next, action, store);
//                     next(action);
//                 };

const middleWare = applyMiddleware(promise(), thunk, logger()); /*, logger_);*/

const store = createStore(reducer, middleWare);

export default store;