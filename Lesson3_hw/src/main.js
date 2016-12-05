import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/js/bootstrap.js';
//import 'bootstrap/dist/css/bootstrap.css';

import Layout from './app/components/Layout';
import Main from './app/pages/Main';

let app = document.getElementById('app');

ReactDOM.render(
    <Layout>
        <Main />
    </Layout>
, app);