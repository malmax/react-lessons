import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute, Redirect } from 'react-router';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

import Default from './app/layouts/Default';
import ArticlesPage from './app/pages/ArticlesPage';
import UsersPage from './app/pages/UsersPage';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';

let app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Default}>
            <IndexRoute component={Main} />
            <Route path="/articles" component={ArticlesPage}></Route>
            <Route path="/users" component={UsersPage}></Route>
        </Route>
        <Route path="*" component={PageNotFound} />
    </Router>
, app);