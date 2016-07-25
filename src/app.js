import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ComponentPage from './components/appStructure/componentPage';
import Layout from './components/appStructure/layout';
import rootreducer from './reducers';

let store = createStore(rootreducer, {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

console.log('the store');

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}/>
          <Route path="/component" component={ComponentPage}/>
        </Router>
      </Provider>
    );
  }

};
