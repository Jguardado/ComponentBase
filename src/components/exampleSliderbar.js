import React, { Component } from 'react';

export default class SliderBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //TODO: Research needed. Receiving error about input children
  render() {
    return (
      <div className='center'>
      <legend className='headingtext'>EXAMPLE SLIDER BAR</legend>
        <div className="barSlider">
          <input type="range" min='0'
            max='10'
            step="1"
            id="fader"
            onChange={
               this.handleChange
            }
            >
            <datalist id="steplist">
            <output id="volume">0</output>
            </datalist>
          </input>
          <span>{this.state.value}</span>
        </div>
        </div>
    );

  }
}
