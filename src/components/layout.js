import React, { Component } from 'react';
import Banner from './Banner';
import Intro from './Intro';
import Header from './exampleRouters';
import Footer from './footer';
import NewComps from './addedComponents';

export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Intro />
        <NewComps />
        <Footer />
      </div>
    );
  }
}
