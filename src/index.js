import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Router} from 'react-router-dom'
import * as createHistory from 'history'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const history = createHistory.createBrowserHistory()

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
