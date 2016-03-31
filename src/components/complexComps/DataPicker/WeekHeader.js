import React, { Component } from 'react';

export default class WeekHeader extends Component {

  render() {
    return (
      <div className='week-header'>
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    );
  }
}
