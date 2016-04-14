// var completed = +this.props.completed;
// if (completed < 0) {completed = 0;};
//
// if (completed > 100) {completed = 100;};
import React, { Component } from 'react';

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
      color: '#0BD318',
    };

    this.increaseBar = this.increaseBar.bind(this);
    this.reset = this.reset.bind(this);
  }

  increaseBar() {
    // var _this = this;

    setInterval(function () {
      if (this.state.completed < 100) {
        console.log('we got this far');
        this.setState({ completed: this.state.completed + 5 });
      }

      if (this.state.completed > 100) {
        return;
      }
    }.bind(this), 1000);
  }

  reset() {
    this.setState({ completed: 0 });
  }

  render () {
    var style = {
      backgroundColor: this.state.color,
      width: this.state.completed + '%',
      transition: 'width 200ms',
      height: 25,
    };

    return (
      <div className="center">
        <legend>Progress bar</legend>
        <button className='btn btn-success' onClick={this.increaseBar}>Start</button>
        <div className="progressbar" style={style}>{this.state.completed}</div>
        <button className='btn btn-success' onClick={this.reset.bind(this)}>Reset bar</button>
      </div>
    );
  }
}

export default ProgressBar;
