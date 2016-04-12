import React, { Component } from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div className='center'>
      <legend className='headingtext'>Example Button</legend>
        <button
        className='btn btn-success'
        onClick={ function () {
          console.log('Hey! who said press that button?');
        }}>Name of button here</button>
      </div>
    );
  }
}
