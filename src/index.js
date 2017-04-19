import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import BrowserRouter from "react-router"
console.log("ROuter: ", BrowserRouter);
console.log('ok though, but still running though');

ReactDOM.render(
    <App />,
  document.getElementById('app')
);
