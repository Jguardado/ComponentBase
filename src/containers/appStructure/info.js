import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    this.props.selectComp(this.props.comp);
  }

  render() {

    return (
      <div className='right'>
        <p>{this.props.selected}</p>
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

function mapStateToProps(state) {
  return state.selected;
}

function mapDispatch(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatch)(Info);
