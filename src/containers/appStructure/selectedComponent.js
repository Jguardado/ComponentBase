import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { deselect } from '../../actions/index';
import './appStructure.css';

//TODO: Integrate a codemirror module into this component to give the user
//the option to view code directly

class SelectComponent extends Component {
  constructor(props) {
    super(props);

    this.unSelect = this.unSelect.bind(this);
  }

  unSelect() {
    const { deselect } = this.props;
    deselect(false);
  }

  render() {
    return (
      <div className="componentBox spacing">
        <pre><code> const freedom != 'free';
          return 'the rest of the components'
         </code></pre>
        <h3>We are working on getting you a forum. In the mean time please feel free to go comment on our github issues pages</h3>
        <span className="">
          <Link to='/components'>
            <button
              className="btn btn-primary leftCorner"
              onClick={this.unSelect}>
              Return to Main
            </button>
          </Link>
        </span>
      </div>
    );
  }
}

function mapStateToProps({ selected }) {
  return { selected };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ deselect }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(SelectComponent);
