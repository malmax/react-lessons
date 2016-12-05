import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Main from './app/pages/Main.jsx';
import Layout from './app/components/Layout.jsx';

let app = document.getElementById('app');
//debugger;
ReactDOM.render(
    <Layout>
        <Main />
    </Layout>
, app); //Отрисовка компонента в блок app