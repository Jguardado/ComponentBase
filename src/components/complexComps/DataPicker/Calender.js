import React, { Component } from 'react';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';
import Weeks from './Weeks';

export default class Calendar extends Component {

  onMove(view, isForward) {
    this.refs.weeks.moveTo(view, isForward);
  }

  onTransitionEnd() {
    this.refs.monthHeader.enable();
  }

  render() {
    const outcome = 'calendar' + this.props.visible ? ' visible' : '';

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

// React.createElement(MonthHeader, { ref: 'monthHeader', view: this.props.view, onMove: this.onMove }),
// React.createElement(WeekHeader, null),
// React.createElement(Weeks, { ref: 'weeks', view: this.props.view, selected: this.props.selected, onTransitionEnd: this.onTransitionEnd, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate })
