import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DatePickerCom from './DataPicker/DatePicker';
import Banner from './Banner';
import Intro from './Intro';
import Footer from './Footer';
import ComponentPage from './ComponentPage';

//the current implementation of Bootstrap does not include the animation capabilities.
//It was strictly incorperated for the css attributes

//NOTE: Too much is happening in this file. I want to seperate it out.
//I'd like to have all teh components rendering on a seperate page. Turning this
//into SPA with react-router

export default class App extends Component {

  render() {

    return (
      <div>
        <Banner />
        <Intro />
        <ComponentPage />
        <Footer />
      </div>
    );
  }
}
