import React, { Component } from 'react';
import MonthHeader, { enable } from './MonthHeader';
import WeekHeader from './WeekHeader';
import Weeks, { moveTo }from './Weeks';

export default class Calendar extends Component {

  onMove(view, isForward) {
    this.refs.weeks.moveTo(view, isForward);
  }

  onTransitionEnd() {
    this.refs.monthHeader.enable();
  }

  render() {
    const outcome = 'calendar' + this.props.visible ? ' visible' : '';
    console.log('starting to render', outcome);
    return (
      <div className={outcome}>
        <MonthHeader ref='monthHeader' view={this.props.view} onMove={this.onMove}/>
        <WeekHeader />
        <Weeks
          ref='weeks'
          view={this.props.view}
          selected={ this.props.selected }
          onTransitionEnd={ this.onTransitionEnd }
          onSelect={ this.props.onSelect }
          minDate={ this.props.minDate }
          maxDate={ this.props.maxDate }
        />
      </div>

    );

  }

}
