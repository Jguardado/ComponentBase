import React, { Component } from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div>
      <legend className='headingtext'>EXAMPLE BUTTON</legend>
        <button
        className='btn btn-success'
        onClick={ function () {
          console.log('Hey! who said press that button?');
        }}>Name of button here</button>
      </div>
    );
  }
}
