import React, { Component } from 'react';
import HideShow from '../examples/exampleHideShow';
import Contructor from '../examples/constructorFunc';
import Buttons from '../examples/exampleButton';
import InputForm from '../examples/exampleInputForm';
import InputOnClick from '../examples/exampleInputOnClick';
import Textbox from '../examples/exampleTextbox';
import SliderBar from '../examples/exampleSliderbar';
import NavBar from '../examples/exampleNavBar';
import Picture from '../examples/exampleImg';
import Dropdown from '../examples/exampleDropdown';
import Info from '../../containers/appStructure/info';
import Header from '../examples/exampleRouters';
import Footer from './Footer';
import ProgressBar from '../examples/exampleProgressBar';

export default class ComponentPage extends Component {

  render() {
    console.log('THIS IS SUPPOSED TO RENDER something');
    return (
      <div>
        <Header />
        <div className='container main'>
        <h1 className='page-header headingtext'>Example of Useful Functions</h1>
          <div className='scrollbar'>
            <div className='componentBox'>
              <ProgressBar />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleProgressBar.js'/>
            </div>
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
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleInputForm.js'/>
            </div>
            <div className='componentBox'>
              <InputOnClick />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleInputOnClick.js'/>
            </div>
            <div className='componentBox'>
              <Textbox />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleTextbox.js'/>
            </div>
            <div className='componentBox'>
              <SliderBar />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleSliderbar.js'/>
            </div>
            <div className='componentBox'>
              <Picture />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleImg.js'/>
            </div>
            <div className='componentBox last'>
              <Dropdown />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleDropdown.js'/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
