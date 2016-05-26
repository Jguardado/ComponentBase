import React, { Component } from 'react';

export default class NewBlogs extends Component {
  render() {
    return (
      <div className='newcomp two'>
        <legend>New Blog Posts</legend>
        <h4>
          <ul><a href='https://medium.com/@juanguardado/stateful-vs-stateless-components-444b5aa21865#.5netw27vq'>Stateful vs Stateless</a></ul>
          <ul><a href='https://medium.com/@juanguardado/how-to-structure-your-app-in-react-dd706639bc93#.ms4djdqhj'>How to start a react app</a></ul>
        </h4>
      </div>
    );
  }
}
