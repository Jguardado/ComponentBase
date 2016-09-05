import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { deselect } from '../../actions/index';


//TODO: Integrate a codemirror module in to this component to give the user
//the option to view code directly
class SelectComponent extends Component {
  constructor(props) {
    super(props);
    console.log('test in SelectComponent: ', deselect);
  }

  unSelect() {
    const { deselect } = this.props;
    console.log('unSelect was called: ', deselect);
    deselect(false);
  }

  render() {
    return (
      <div className="componentBox spacing">
        <pre><code> const freedom != 'free';
          return 'the rest of the components'
         </code></pre>
        <h3>We are working on getting you a forum. In the mean time please feel free to got commet on our github issues pages</h3>
        <span className="">
          <Link to='/component'>
            <button className="btn btn-primary leftCorner" onClick={this.unSelect.bind(this)}>Return to Main</button>
          </Link>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.selected;
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ deselect }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(SelectComponent);
