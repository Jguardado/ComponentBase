import React, { Component } from 'react';
import Hello from './hellopage';

export default class App extends Component {

  render() {
    console.log('App Component being called');
    return (
      <div>
        <Hello/>
      </div>
    );
  }
}
