import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";


import Header from './app/components/Header';
import Footer from './app/components/Footer';
import LayoutBlogPage from './app/pages/LayoutBlogPage';

//debugger;
ReactDOM.render(
    <div>
        <Header title="My Blog" />
        <LayoutBlogPage blogId="2">
            <Footer />
        </LayoutBlogPage>
        
    </div>,
     document.getElementById('app')); //Отрисовка компонента в блок app