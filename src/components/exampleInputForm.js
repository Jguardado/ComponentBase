import React, { Component } from 'react';

export default class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });

    console.log(this.state.value);
  }

  render() {

    return (
      <div>
        <div>
          <input type='text'
          placeholder='type somethin'
          value={ this.state.value }
          onSubmit={ this.handleInputChange.bind(this) }
          ></input>
        </div>
      </div>
    );

  }
}

// <div>
//   <input type='text'
//   placeholder='type somethin'
//   value={ this.state.value }
//   onChange={ this.handleInputChange.bind(this) }
//   ></input>
// </div>
