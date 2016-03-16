import React, { Component } from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div>
      <legend>EXAMPLE BUTTON</legend>
        <button
        className='btn'
        onClick={ function () {
          console.log('Hey! who said press that button?');
        }}>Name of button here</button>
      </div>
    );
  }
}
