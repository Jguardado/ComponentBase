import React from 'react';
import Banner from './Banner';
import Intro from './Intro';
// import Header from '../examples/exampleRouters';
import AdditionalInfo from "./additionalInfo/additionalInfo"
import Footer from './Footer';

console.log("additionalInfo: ", AdditionalInfo);

//TODO: Layout needs to be a universal thing header and footer should be present in every page
//consider moving these components to the app level for now as Layout become reconfigured
const Layout = () => {
  return (
    <div>
      <Banner />
      <Intro />
      <AdditionalInfo />
      <Footer />
    </div>
  );
}

export default Layout
