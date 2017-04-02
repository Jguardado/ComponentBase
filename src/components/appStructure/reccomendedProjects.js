import React, { Component } from 'react';

export default class OtherProjects extends Component {
  render() {
    return (
      <div className='newcomp three'>
        <div className="box-heading">Cool Projects</div>
        <h4>
          <ul className='list-items'><a href='https://abvolt.herokuapp.com/'>HeartBeat</a></ul>
          <ul className='list-items'><a href='https://spotz.herokuapp.com/#/login'>Spotz</a></ul>
          <ul className='list-items'><a href='https://github.com/BillionaireBoysClub/hotspot'>HotSpot</a></ul>
          <ul className='list-items'><a href='https://prsnl-2.herokuapp.com/'>Prsnl</a></ul>
        </h4>
      </div>
    );
  }
}
