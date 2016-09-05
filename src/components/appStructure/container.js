import React, { Component } from 'react';
import Nav from '../examples/exampleRouters';

export const Container = (props) => <div>
  <Nav />
  {props.children}
</div>;
