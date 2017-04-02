import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="item">Built by: Juan Guardado</span>
        <span className='item'>Oakland, CA</span>
        <span className='item'>Copyright(C) 2016</span>
      </div>
    );
  }
};

// <img className='footer item' src='/src/images/logo-min.png' alt="*"></img>
