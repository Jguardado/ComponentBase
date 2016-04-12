import React, { Component } from 'react';
import Banner from './Banner';
import Intro from './Intro';
import Header from './exampleRouters';
import Footer from './Footer';
import NewComps from './addedComponents';
import NewBlogs from './NewBlogs';
import OtherProjects from './reccomendedProjects';

export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Intro />
        <NewComps />
        <NewBlogs />
        <OtherProjects />
        <Footer />
      </div>
    );
  }
}
