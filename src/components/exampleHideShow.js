import React, { Component } from 'react';

export default class HideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    if (this.state.visible) {
      return (
        <div>
        <legend className='headingtext'>EXAMPLE HIDE/SHOW</legend>
        <div className='exampleHideShow'>
          <button className='btn' onClick={ this.hide.bind(this)}>Peek-a-Boo</button>
        </div>
        </div>
      );
    }

    if (!this.state.visible) {
      return (
        <div>
        <legend className='headingtext'>EXAMPLE HIDE/SHOW</legend>
        <div className='exampleHideShow2'>
          <button className='btn' onClick={ this.show.bind(this)}>Click Here</button>
          </div>
        </div>
      );
    }
  }
}
