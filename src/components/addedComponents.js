import React, {Component} from 'react';
import {Link} from 'react-router';

class AddedComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='col-md-3 col-md-offset-8 newcomp'>
        <legend>Recently Added Components</legend>
          <h5>
            <ul className='list-items'><a href='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleNavBar.js'>Navbar</a></ul>
            <ul className='list-items'><a href='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleTextbox.js'>TextBox</a></ul>
            <ul className='list-items'><a href='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleDropdown.js'>DropDown</a></ul>
          </h5>
          <span>note: new components will be added as they are created aor edited</span>
      </div>
    );
  }
}

export default AddedComponents;
