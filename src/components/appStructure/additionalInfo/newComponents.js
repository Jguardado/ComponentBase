import React from 'react';
import { Link } from 'react-router';

const NewComponents = () => {
    return (
      <div className='newcomp one'>
        <div className="box-heading">New Components</div>
          <h4>
            <ul className='list-items'><a href='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleProgressBar.js'>Progress Bar</a></ul>
            <ul className='list-items'><a href='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleNavBar.js'>Navbar</a></ul>
            <ul className='list-items'><a href='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleTextbox.js'>TextBox</a></ul>
            <ul className='list-items'><a href='https://github.com/Jguardado/ComponentBase/blob/master/src/components/exampleDropdown.js'>DropDown</a></ul>
          </h4>
      </div>
    );
}

export default NewComponents;
