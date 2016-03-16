import React, { Component } from 'react';
import HideShow from './exampleHideShow';
import Contructor from './constructorFunc';
import Buttons from './exampleButton';
import InputForm from './exampleInputForm';
import InputOnClick from './exampleInputOnClick';
import Textbox from './exampleTextbox';
import SliderBar from './exampleSliderbar';
import { Button } from 'react-bootstrap';

export default class App extends Component {

  render() {
    console.log('App Component being called');
    return (

      <div className='container'>
      <h1 className='page-header'>EXAMPLE OF USEFUL FUNCTIONS</h1>
        <HideShow/>
        <Contructor />
        <Buttons />
        <InputForm />
        <InputOnClick />
        <Textbox />
        <SliderBar />
      </div>
    );
  }
}
