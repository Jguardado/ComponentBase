import React, { Component } from 'react';
import Banner from './Banner';
import Intro from './Intro';
import Header from './exampleRouters';
import Footer from './footer';

export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Intro />
        <Footer />
      </div>
    );
  }
}
