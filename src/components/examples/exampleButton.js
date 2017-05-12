import React, { Component } from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div className='center'>
      <div className='headingtext'>Example Button</div>
        <button
        className='button-style'
        onClick={ function () {
          console.log('Hey! who said press that button?');
        }}>Name of button here</button>
      </div>
    );
  }
}
