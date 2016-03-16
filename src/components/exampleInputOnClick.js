import React, { Component } from 'react';

//This is incomplete...Its not rendering correctly
export default class InputOnClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      input: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.setState({ input: this.state.value }, function () {
      this.setState({ value: '' });
    });

  }

  handleInputChange(event) {

    this.setState({ value: event.target.value });
  }

  render() {

    return (
        <form onSubmit={ this.handleInputSubmit.bind(this) }>
          <div>
          <h4>EXAMPLE INPUT WITH SUBMIT BUTTON</h4>
            <input
            type='text'
            value= {this.state.value}
            onChange={this.handleInputChange.bind(this)}
            placeholder='type somethin special'
            ></input>
            <input type='submit' value='click'></input>
          </div>
        </form>
    );

  }
}
