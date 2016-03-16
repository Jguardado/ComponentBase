import React, { Component } from 'react';

export default class Contructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'Created on initializaton',
    };
  }

  render() {

    return (
      <div className="constructor">
      <h4>EXAMPLE CONSTRUCTOR</h4>
      {this.state.test}
      </div>
    );
  }
}
