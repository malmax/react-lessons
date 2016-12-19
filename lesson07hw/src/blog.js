// Малахов Максим

// Вопрос к преподавателю:
// Вопросы к преподавателю:
// 1. зачем нужно возвращать именно функцию в экшенах?
// 2. loadBlogs вызывается в констракте BlogsListPage каждый раз при монтировании компонента
// не лучше было бы его вызывать в сторе при инициализации?
// 3. Где стоит производить переборку массива, например, blogs. В render - все норм, пытался в componentWillReceiveProps срабатывало не всегда


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import HomePage from './app/pages/HomePage.jsx';
import BlogListPage from './app/pages/BlogListPage.jsx';
import BlogPage from './app/pages/BlogPage.jsx';
import CommentList from './app/components/CommentList.jsx';
import PageNotFound from './app/pages/PageNotFound.jsx';

import UserListPage from './app/pages/UserListPage.jsx';
import UserPage from './app/pages/UserPage.jsx';

import Default from './app/layouts/Default.jsx';

import { Provider } from 'react-redux';
import store from './app/stores/store';

let app = document.getElementById('app');


ReactDOM.render(
    <Provider store={store} >
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
    </Provider>
, app); //Отрисовка компонента в блок app