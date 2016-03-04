import React, { Component } from 'react';
import HideShow from './exampleHideShow';
import Contructor from './constructorFunc';
import Button from './exampleButton';
import InputForm from './exampleInputForm';

export default class App extends Component {

  render() {
    console.log('App Component being called');
    return (
      <div className='container'>
        <HideShow/>
        <Contructor />
        <Button />
        <InputForm />
      </div>
    );
  }
}
