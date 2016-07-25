import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';

class SelectComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the selected</h1>
        <button onClick={this.props.deselect}>Return to Main</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selected: state.selected };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(SelectComponent);
