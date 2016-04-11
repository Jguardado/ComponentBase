import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='panel panel-default panel-footer foot'>
        <span className='inline col-md-3'>Built by: Juan Guardado</span>
        <span className='inline col-md-6'>Oakland, CA</span>
        <span className='inline col-md-3'>Copyright(C) 2016</span>
      </div>
    );
  }
};
