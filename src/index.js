import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' //access state from anywhere inside the app
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import App from './App';
//setup redux
const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
document.getElementById('root'));