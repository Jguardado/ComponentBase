import React, { Component } from 'react';

export default class Picture extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <legend className='headingtext'>EXAMPLE PICTURE</legend>
        <img className='picture' src='/src/images/myFace.jpg'/>
      </div>
    );
  }
}
