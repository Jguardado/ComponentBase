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
import DatePickerCom from './DataPicker/DatePicker';
import Banner from './Banner';
import Intro from './Intro';
import Info from './Info';
import NavBar from './exampleNavBar';

//the current implementation of Bootstrap does not include the animation capabilities.
//It was strictly incorperated for the css attributes

export default class App extends Component {

  render() {

    return (
      <div>
        <Banner />
        <Intro />
        <div className='container main'>
        <h1 className='page-header headingtext'>EXAMPLE OF USEFUL FUNCTIONS</h1>
          <div className='componentBox'>
            <NavBar />
            <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleNavBar.js'/>
          </div>
          <div className='componentBox'>
            <HideShow/>
            <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleHideShow.js'/>
          </div>
          <div className='componentBox'>
            <Contructor />
            <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/constructorFunc.js'/>
          </div>
          <div className='componentBox'>
            <Buttons />
            <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleButton.js'/>
          </div>
          <div className='componentBox'>
            <InputForm />
            <Info />
          </div>
          <div className='componentBox'>
            <InputOnClick />
            <Info />
          </div>
          <div className='componentBox'>
            <Textbox />
            <Info />
          </div>
          <div className='componentBox'>
            <SliderBar />
            <Info />
          </div>
          <div className='componentBox'>
            <Picture />
            <Info />
          </div>
          <div className='componentBox'>
            <Dropdown />
            <Info />
          </div>
        </div>
      </div>
    );
  }
}
