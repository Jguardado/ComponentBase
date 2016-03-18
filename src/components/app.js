import React, { Component } from 'react';
import HideShow from './exampleHideShow';
import Contructor from './constructorFunc';
import Buttons from './exampleButton';
import InputForm from './exampleInputForm';
import InputOnClick from './exampleInputOnClick';
import Textbox from './exampleTextbox';
import SliderBar from './exampleSliderbar';
import { Button } from 'react-bootstrap';
import Picture from './exampleImg';
import Dropdown from './exampleDropdown';

//the current implementation of Bootstrap does not include the animation capabilities.
//It was strictly incorperated for the css attributes

export default class App extends Component {

  render() {
    console.log('App Component being called');
    return (

      <div className='container main'>
      <h1 className='page-header'>EXAMPLE OF USEFUL FUNCTIONS</h1>
        <HideShow/>
        <Contructor />
        <Buttons />
        <InputForm />
        <InputOnClick />
        <Textbox />
        <SliderBar />
        <Picture />
        <Dropdown />
      </div>
    );
  }
}
