// Малахов Максим


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import HomePage from './pages/HomePage.jsx';
import BlogListPage from './pages/BlogListPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import CommentList from './components/CommentList.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

import UserListPage from './pages/UserListPage.jsx';
import UserPage from './pages/UserPage.jsx';

import Default from './layouts/Default.jsx';

let app = document.getElementById('app');


// <IndexRoute component={Main} />
//
ReactDOM.render(
    <Router history={browserHistory}>
    
        <Route path="/" component={Default} >            
            <IndexRoute component={HomePage} /> 
            <Route path="/comments" component={CommentList} />
            <Route path="/blogs" component={BlogListPage}>
                <Route path=":blogId" component={BlogPage} />
            </Route>
            <Route path="/users" component={UserListPage}>
                <Route path=":userId" component={UserPage} />
            </Route>
            <Redirect to="/blogs" from="/articles" />  
            <Route path="*" component={PageNotFound} />
        </Route>

    </Router>
, app); //Отрисовка компонента в блок app