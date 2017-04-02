import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentFeed extends Component {
  constructor(props) {
    spuer(props);
  }

  render() {
    return <div>Comments go here</div>;

    //this is where I will need to pull information from database with action calls.
    //use map to iterate through comments and present each one in their own comment conatainer
  }
}

export default CommentFeed;
