import React, { Component } from 'react';

export default class SliderBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      input: {
        min: 0,
        max: 10,
        step: 1,
        id:'fader',
      },
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
      <legend className='headingtext'>Example Slider Bar</legend>
        <div className="barSlider">
          <input type="range" min={this.state.input.min}
            max={this.state.input.max}
            step={this.state.input.step}
            id={this.state.input.id}
            onChange={this.handleChange}>
            </input>
            <datalist id="steplist">
              <output id="volume">0</output>
            </datalist>
            <h1>{this.state.value}</h1>
        </div>
      </div>
    );

  }
}
