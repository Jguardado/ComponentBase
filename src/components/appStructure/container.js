import React, { Component } from 'react';
import Header from './header.jsx';

export const Container = (props) => <div>
  <Header />
  {props.children}
</div>;
