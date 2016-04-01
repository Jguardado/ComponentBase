import React, { Component } from 'react';
import DateUtilities from './DateUtilities';

class Week extends Component {

  buildDays(start) {
    const days = [DateUtilities.clone(start)];
    const clone = DateUtilities.clone(start);

    for (var i = 1; i <= 6; i++) {
      clone = DateUtilities.clone(clone);
      clone.setDate(clone.getDate() + 1);
      days.push(clone);
    }

    return days;
  }

  isOtherMonth(day) {
    return this.props.month !== day.month();
  }

  getDayClassName(day) {
    var className = 'day';
    if (DateUtilities.isSameDay(day, new Date()))
    className += ' today';
    if (this.props.month !== day.getMonth())
    className += ' other-month';
    if (this.props.selected && DateUtilities.isSameDay(day, this.props.selected))
    className += ' selected';
    if (this.isDisabled(day))
    className += ' disabled';
    return className;
  }

  onSelect(day) {
    if (!this.isDisabled(day))
    this.props.onSelect(day);
  }

  isDisabled(day) {
    const minDate = this.props.minDate;
    const maxDate = this.props.maxDate;

    return (minDate && DateUtilities.isBefore(day, minDate)) || (maxDate && DateUtilities.isAfter(day, maxDate));
  }

  render() {
    var days = this.buildDays(this.props.start);
    return React.createElement('div', { className: 'week' },
      days.map(function (day, i) {
        return React.createElement('div', { key: i, onClick: this.onSelect.bind(null, day), className: this.getDayClassName(day) }, DateUtilities.toDayOfMonthString(day));
      }.bind(this))
    );
  }

}
