import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NOTE: this is an interesting pattern. It allows for you to pull in all of the
// actions (without naming) and mapthem to dispatch. However this is reliant on
// the fact that all of teh actions are generated in teh same file
import * as actionCreators from '../../actions/index';

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
    // console.log('props in info page; ', this.props);
    return (
      <div className='right'>
        <div>
          <button
            onClick={this.makeSelect}
            className="btn btn-primary">Select</button>
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
