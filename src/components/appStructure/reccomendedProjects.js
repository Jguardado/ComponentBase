import React, { Component } from 'react';
import './appStructure.css';

export default class OtherProjects extends Component {
  render() {
    return (
      <div className='newcomp three'>
        <legend>Cool Projects</legend>
        <h4>
          <ul><a href='https://abvolt.herokuapp.com/'>HeartBeat</a></ul>
          <ul><a href='https://spotz.herokuapp.com/#/login'>Spotz</a></ul>
          <ul><a href='https://github.com/BillionaireBoysClub/hotspot'>HotSpot</a></ul>
          <ul><a href='https://prsnl-2.herokuapp.com/'>Prsnl</a></ul>
        </h4>
      </div>
    );
  }
}
