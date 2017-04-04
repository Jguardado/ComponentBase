import React from 'react';
import Header from './header.jsx';

const Container = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Container
