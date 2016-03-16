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
        <legend>EXAMPLE HIDE/SHOW</legend>
        <div className='exampleHideShow'>
          <h1 onClick={ this.hide.bind(this)}>Peek-a-Boo</h1>
        </div>
        </div>
      );
    }

    if (!this.state.visible) {
      return (
        <div>
        <legend>EXAMPLE HIDE/SHOW</legend>
        <div className='exampleHideShow2'>
          <h4 onClick={ this.show.bind(this)}>Click Here</h4>
          </div>
        </div>
      );
    }
  }
}
