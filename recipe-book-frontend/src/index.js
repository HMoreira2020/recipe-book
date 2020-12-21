import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'react-thunk'
import { Provider } from 'react-redux'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


