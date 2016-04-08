import React, { Component } from 'react';

//NOTE:

//Most routers are built using React-Router or BootStrap NavBar. This example shows
//how to create a menu that can be used as a navigation bar. NOTE:Styling is not included
//and can be designed in any manner you would like. This menu allows you select state which
//can then be passed an href, route, or any other form of input you desire to be used for navigation

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: 0,
      items: ['Home', 'Services', 'About', 'Contact us'],
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked(index) {
    this.setState({ focused: index });
  }

  render() {
    var _this = this;

    return (
        <div className='center'>
        <legend className='headingtext'>EXAMPLE NAVBAR</legend>
          <ul>{ this.state.items.map(function (m, index) {
            var style = '';
            if (_this.state.focused == index) {
              style = 'focused';
            }

            return <button className={style} className='btn btn-info' key={index} onClick={_this.clicked.bind(self, index)}>{m}</button>;
          }) }

          </ul>
          <p>Selected: {this.state.items[this.state.focused]}</p>
        </div>
  );
  }
}
