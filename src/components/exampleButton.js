import React, { Component } from 'react';

export default class Button extends Component {

  render() {
    return (
      <div>
        <button onClick={ function () {
          console.log('Hey! who said press that button?');
        }}>Name of button here</button>
      </div>
    );
  }
}
