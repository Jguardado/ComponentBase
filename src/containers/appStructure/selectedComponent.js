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
      <div className="componentBox spacing">
        <h3>We are working on getting you a forum. In the mean time please feel free to got commet on our github issues pages</h3>
        <span className="">
          <button className="btn btn-primary leftCorner" onClick={this.props.deselect}>Return to Main</button>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.selected;
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(SelectComponent);
