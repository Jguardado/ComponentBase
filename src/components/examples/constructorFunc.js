import React, { Component } from 'react';

/**
* Class respresenting a Constructor Function
* @constructor
*/
export default class Contructor extends Component {
  constructor(props) {
    super(props);
    /** intializing the state of the component
    */
    this.state = {
      /** Anything assigned in the state object will be the intial values
      */
      test: 'Created on initializaton',
    };
  }

  render() {
    /**
    * @return The JSX represenation of a constructor functiom
    */
    return (
      <div className='center'>
      <legend className='headingtext'>Example Constructor</legend>
      {this.state.test}
      </div>
    );
  }
}
