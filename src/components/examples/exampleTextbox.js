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
  }

  // onSubmit={this.handleSubmit.bind(this)}>

  render() {

    return (
      <div>
        <form>
          <fieldset>
            <legend className='headingtext'>Example Text/Comment Box</legend>
            <label className='blocked'>Your Title/Description here</label>
            <textarea
              rows='5'
              className='textbox comments'
              value={ this.state.value }
              placeholder="Whats Good..."
              onChange={this.handleChange.bind(this)} >
            </textarea>
            <textarea
              className='comments commentBox'
              value={this.state.comment}>
            </textarea>
            <button
            type="submit"
            className='btn btn-success blocked'
            onClick={this.handleSubmit.bind(this)}>Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
