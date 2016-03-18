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
    //setState is async so the value must be reset only when the comment section has been populated

    this.setState({ comment: this.state.value }, function () { this.setState({ value: '' });});

    console.log('this is being called', this.state);
  }

  // onSubmit={this.handleSubmit.bind(this)}>

  render() {

    return (
    <form>
      <fieldset>
      <legend>EXAMPLE TEXT/COMMENT BOX</legend>
      <label>You title/description here</label>
      <textarea
        rows='5'
        className='blocked textbox'
        value={ this.state.value }
        placeholder="Whats Good..."
        onChange={this.handleChange.bind(this)} >
      </textarea>
      <button
      type="submit"
      className='btn blocked'
      onClick={this.handleSubmit.bind(this)}>Submit</button>
      </fieldset>
    </form>
    );
  }
}
