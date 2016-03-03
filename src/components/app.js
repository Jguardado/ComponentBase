import React, { Component } from 'react';
import HideShow from './exampleHideShow';

export default class App extends Component {

  render() {
    console.log('App Component being called');
    return (
      <div className='container'>
        <HideShow/>
      </div>
    );
  }
}
