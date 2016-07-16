import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1 className='center jumobotext'>ComponentBase</h1>
        <img className='logo center-block' src='/src/images/logo.png'/>
      </div>
    );
  }
}
