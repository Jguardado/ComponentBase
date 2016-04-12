import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='panel panel-default panel-footer foot'>
        <span className='inline col-md-2'>Built by: Juan Guardado</span>
        <span className='inline col-md-2'>Oakland, CA</span>
        <img className='inline col-md-offset-3 small-logo' src='/src/images/logo.png'></img>
        <span className='inline col-md-4'>Copyright(C) 2016</span>
      </div>
    );
  }
};
