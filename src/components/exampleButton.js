import React, { Component } from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div>
      <h4>EXAMPLE BUTTON</h4>
        <button onClick={ function () {
          console.log('Hey! who said press that button?');
        }}>Name of button here</button>
      </div>
    );
  }
}
