import React, { Component } from 'react';

export default class Hello extends Component {
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
          <h1 onClick={ this.hide.bind(this)}>Peek-a-Boo</h1>
        </div>
      );
    }

    if (!this.state.visible) {
      return <h4 onClick={ this.show.bind(this)}>Click Here</h4>;
    }
  }
}
