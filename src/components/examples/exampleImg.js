import React, { Component } from 'react';

export default class Picture extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='center'>
        <legend className='headingtext'>Example Picture</legend>
        <img className='picture' src='/src/images/myFace-min.jpg'/>
      </div>
    );
  }
}
