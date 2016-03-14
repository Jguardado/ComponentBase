import React, { Component } from 'react';
import HideShow from './exampleHideShow';
import Contructor from './constructorFunc';
import Button from './exampleButton';
import InputForm from './exampleInputForm';
import InputOnClick from './exampleInputOnClick';
import Textbox from './exampleTextbox';
import SliderBar from './exampleSliderbar';

export default class App extends Component {

  render() {
    console.log('App Component being called');
    return (
      <div className='container'>
        <HideShow/>
        <Contructor />
        <Button />
        <InputForm />
        <InputOnClick />
        <Textbox />
        <SliderBar />
      </div>
    );
  }
}
