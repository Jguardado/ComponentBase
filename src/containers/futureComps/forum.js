import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExampleTextBox from '../exampleTextbox.js';

class Forum extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <ExampleTextBox />
        <CommentFeed />
      </div>
    );
  }
}

export default Forum;
