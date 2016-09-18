import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

console.log('ok though, but still though running');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
