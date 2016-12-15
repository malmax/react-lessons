// Малахов Максим

// Вопрос к преподавателю:
// 1 При попытке задать инпутам Модального окна value через this.state выдает ошибку но рендерит правильно
// А если ставить defaultValue то там остаются значения только которые были при инициализации
// Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `Modal`.
// 2 правильно ли в BlogStore размещать первоначальное обращение к сервису чтобы подгрузить случайные блоги?


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