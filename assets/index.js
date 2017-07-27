import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './react/components/app';
import reducers from './react/reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

window.onload = () =>
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#container')
);