import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actions/action';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
    this.makeSelect = this.makeSelect.bind(this);
  }

  makeSelect() {
    this.props.selectComp(true);
  }

  render() {
    console.log('props in Info: ', this.props);
    return (
      <div className='right'>
        <div>
          <button
            onClick={this.makeSelect}
            className="button-style">Select</button>
          <h4><a className='gitLink' href={this.props.github}>Get the Code</a></h4>
        </div>
      </div>
    );
  }
}

function mapDispatch(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatch)(Info);
