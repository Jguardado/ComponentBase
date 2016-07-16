import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ComponentPage from './components/appStructure/componentPage';
import Layout from './components/appStructure/layout';

export default class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}/>
        <Route path="/component" component={ComponentPage}/>
      </Router>
    );
  }

};
