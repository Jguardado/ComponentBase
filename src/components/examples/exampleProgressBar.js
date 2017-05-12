import React, { Component } from 'react';

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    //the level of the completed bar is currently represent by this.state.completed.
    //this can be changed easily but sitting it to a prop value
    this.state = {
      completed: 0,
      color: '#0BD318',
      comp: 'progress_bar',
    };

    this.increaseBar = this.increaseBar.bind(this);
    this.reset = this.reset.bind(this);
  }

  increaseBar() {
    // var _this = this;

    setInterval(function () {
      if (this.state.completed < 100) {
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
        <div>Progress bar</div>
        <div className="progressbar" style={style}>{this.state.completed}</div>
        <button className='button-style' onClick={this.increaseBar}>Start</button>
        <button className='button-style' onClick={this.reset.bind(this)}>Reset bar</button>
      </div>
    );
  }
}

export default ProgressBar;
