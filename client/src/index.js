import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import allReducers from './reducers';
import './index.css';

const myStore = createStore(allReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={myStore}>
        <App/>
    </Provider>, document.getElementById('root'));