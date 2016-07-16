import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
    };
  }

  render() {
    console.log('these are the props', this.props);

    return (
      <div className='right'>
        <p>Soon to come</p>
        <div>
          <button className="btn-primary">Select</button>
          <h4><a className='gitLink' href={this.props.github}>Get the Code</a></h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selected: state.selected };
}

function mapDispatch(dispatch) {
  return bindActionCreators(dispatch);
}

export default connect(mapStateToProps, mapDispatch)(Info);
