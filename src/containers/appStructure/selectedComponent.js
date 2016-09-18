import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { deselect } from '../../actions/action';
import Codemirror from 'react-codemirror';
import './appStructure.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

//TODO: Must build out default versions of comps as below
const defaults = {
  javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};',
};

class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaults.javascript,
      mode: 'javascript',
      readOnly: true,
    };

    this.unSelect = this.unSelect.bind(this);
  }

  unSelect() {
    const { deselect } = this.props;
    deselect(false);
  }

  render() {
    const options = {
      lineNumbers: true, readOnly: this.state.readOnly, mode: this.state.mode,
    };

    return (
      <div>
        <Codemirror ref="editor" value={this.state.code} options={options}/>
        <div className="componentBox spacing">
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


// <div className="componentBox spacing">
//   <h3>We are working on getting you a forum. In the mean time please feel free to go comment on our github issues pages</h3>
//   <span className="">
//     <Link to='/components'>
//       <button
//         className="btn btn-primary leftCorner"
//         onClick={this.unSelect}>
//         Return to Main
//       </button>
//     </Link>
//   </span>
// </div>
