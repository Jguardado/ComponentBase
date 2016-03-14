import React, { Component } from 'react';

export default class Textbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      comment: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    //this stores the submited text for one cycle. (value > comment> value > comment)
    //which means in order to presist this data it must be sent to the database.
    //setState is a async function and so the value must be reset only when the comment section has been populated

    this.setState({ comment: this.state.value }, function () { this.setState({ value: '' });});

  }

  render() {

    return (
    <form
      onSubmit={this.handleSubmit.bind(this)}>
      <div>
        <label>You title/description here</label>
        <textarea
        value={ this.state.value }
        placeholder="Whats Good..."
        onChange={this.handleChange.bind(this)} >
        </textarea>

      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
    );
  }
}
