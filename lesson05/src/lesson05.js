import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Main from './pages/Main.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import ArticleId from './pages/ArticleId.jsx';
import Comments from './pages/Comments.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

import Default from './layouts/Default.jsx';

let app = document.getElementById('app');

let onEnter = function() {

}
// <IndexRoute component={Main} />
//
ReactDOM.render(
    <Router history={browserHistory}>
    
        <Route path="/" component={Default} >            
            <IndexRoute component={Main} /> 
            <Route path="/comments" component={Comments} />
            <Route path="/articles" component={ArticlePage} onEnter={onEnter}>
                <Route path=":blogId" component={ArticleId} />
            </Route>
            <Redirect to="/articles" from="/blog" />  
            <Route path="*" component={PageNotFound} />
        </Route>

    </Router>
, app); //Отрисовка компонента в блок app