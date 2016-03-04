import React, { Component } from 'react';

export default class InputOnClick extends Component {
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
          <input type='text' value={this.state.value}></input>
          <form
          placeholder='type somethin'
          onSubmit={ this.handleInputChange.bind(this) }
          ><button>Submit</button></form>
        </div>
      </div>
    );

  }
}
