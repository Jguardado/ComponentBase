import React, { Component } from 'react';

export default class Contructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'Created on initializaton',
    };
  }

  render() {
    return <div className="constructor">{this.state.test}</div>;
  }
}
