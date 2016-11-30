import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './app/components/productlist.component.jsx';

let app = document.getElementById('app');
//debugger;
ReactDOM.render(<ProductList />, app); //Отрисовка компонента в блок app