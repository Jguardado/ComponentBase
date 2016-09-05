import React, { Component } from 'react';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';
import Weeks, { moveTo } from './Weeks';
// import Weeks from './Weeks';

export default class Calendar extends Component {

  onMove(view, isForward) {
    Weeks.prototype.moveTo(view, isForward);
  }

  onTransitionEnd() {
    MonthHeader.prototype.enable();
  }

  render() {
    console.log("props in Calendar: ", this.props);
    const outcome = 'calendar' + this.props.visible ? ' visible' : '';
    console.log('starting to render');
    return (
      <div className={outcome}>
        <MonthHeader view={this.props.view} onMove={this.onMove}/>
        <WeekHeader />
        <Weeks
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
