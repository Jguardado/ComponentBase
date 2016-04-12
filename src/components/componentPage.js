import React, { Component } from 'react';
import HideShow from './exampleHideShow';
import Contructor from './constructorFunc';
import Buttons from './exampleButton';
import InputForm from './exampleInputForm';
import InputOnClick from './exampleInputOnClick';
import Textbox from './exampleTextbox';
import SliderBar from './exampleSliderbar';
import NavBar from './exampleNavBar';
import Picture from './exampleImg';
import Dropdown from './exampleDropdown';
import Info from './Info';
import Header from './exampleRouters';
import Footer from './Footer';

export default class ComponentPage extends Component {

  render() {
    console.log('THIS IS SUPPOSED TO RENDER');
    return (
      <div>
        <Header />
        <div className='container main'>
        <h1 className='page-header headingtext'>Example of Useful Functions</h1>
          <div className='scrollbar'>
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
              <SliderBar />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleSliderbar.js'/>
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
