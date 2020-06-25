import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import { Provider } from 'react-redux'
import configureStore from './store/store';
import "./styles/styles.scss"
import "normalize.css";


ReactDOM.render(
    <Provider store={configureStore}>
        <AppRouter />
    </Provider>
    , document.getElementById('root'));
