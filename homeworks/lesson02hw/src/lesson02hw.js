import React from 'react';
import ReactDOM from 'react-dom';

import Main from './app/components/main.component.jsx';
import Clock from './app/components/clock.component.jsx';

let app = document.getElementById('app');
//debugger;
ReactDOM.render(<Main />, app); //Отрисовка компонента Main в блок app