import React, { Component } from 'react';
import './appStructure.css';
import Banner from './Banner';
import Intro from './Intro';
// import Header from '../examples/exampleRouters';
import Footer from './Footer';
import NewComps from './addedComponents';
import NewBlogs from './newBlogs';
import OtherProjects from './reccomendedProjects';


//TODO: Layout needs to be a universal thing header and footer should be present in every page
//consider moving these components to the app level for now as Layout become reconfigured
export default class Layout extends Component {

  render() {
    return (
      <div>
        <Banner />
        <Intro />
        <div className='three-boxes'>
          <NewComps />
          <NewBlogs />
          <OtherProjects />
        </div>
        <Footer />
      </div>
    );
  }
}
