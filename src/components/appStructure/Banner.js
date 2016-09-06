import React, { Component } from 'react';
import './appStructure.css';
import logoPic from '.././../images/logo.png';

console.log('logpic', logoPic);

export default class Banner extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1 className='center jumobotext'>ComponentBase</h1>
        <img className='logo center-block' src={logoPic} alt="underconstruction... sorry"/>
      </div>
    );
  }
}
