import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';

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
          <button onClick={this.props.selectComp} className="btn-primary">Select</button>
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
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatch)(Info);
