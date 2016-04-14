import React, { Component } from 'react';

export default class OtherProjects extends Component {
  render() {
    return (
      <div className='col-md-3 newcomp'>
        <legend>Cool Projects</legend>
        <h4>
          <ul className='col-md-6 inline'><a href='https://abvolt.herokuapp.com/'>HeartBeat</a><li className='inline'><a href=''>github</a></li></ul>
          <ul><a href='https://spotz.herokuapp.com/#/login'>Spotz</a></ul>
          <ul><a href='https://github.com/BillionaireBoysClub/hotspot'>HotSpot</a></ul>
          <ul><a href='https://prsnl-2.herokuapp.com/'>Prsnl</a></ul>
        </h4>
      </div>
    );
  }
}
