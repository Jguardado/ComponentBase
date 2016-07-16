import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';

class Info extends Component {
  render() {
    console.log('these are the props', this.props);

    return (
      <div className='right'>
        <p>{this.props.info}</p>
        <div>
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
  return bindActionCreator(selected, dispatch);
}

export default connect(mapStateToProps, mapDispatch)(Info);
