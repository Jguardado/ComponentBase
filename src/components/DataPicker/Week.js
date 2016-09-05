import React, { Component } from 'react';
import { clone, isSameDay, isBefore, isAfter, toDayOfMonthString } from './DateUtilities';

class Week extends Component {

  constructor(props){
    super(props);

    console.log("rhese are the props: ", this.props);
  }
  //
  // buildDays(start) {
  //   const days = [clone(start)];
  //   let clone = clone(start);
  //
  //   for (var i = 1; i <= 6; i++) {
  //     clone = clone(clone);
  //     clone.setDate(clone.getDate() + 1);
  //     days.push(clone);
  //   }
  //
  //   return days;
  // }
  //
  // isOtherMonth(day) {
  //   return this.props.month !== day.month();
  // }
  //
  // getDayClassName(day) {
  //   var className = 'day';
  //   if (isSameDay(day, new Date()))
  //   className += ' today';
  //   if (this.props.month !== day.getMonth())
  //   className += ' other-month';
  //   if (this.props.selected && isSameDay(day, this.props.selected))
  //   className += ' selected';
  //   if (this.isDisabled(day))
  //   className += ' disabled';
  //   return className;
  // }
  //
  // onSelect(day) {
  //   if (!this.isDisabled(day))
  //   this.props.onSelect(day);
  // }
  //
  // isDisabled(day) {
  //   const minDate = this.props.minDate;
  //   const maxDate = this.props.maxDate;
  //
  //   return (minDate && isBefore(day, minDate)) || (maxDate && isAfter(day, maxDate));
  // }

  render() {
    // var days = this.buildDays(this.props.start);

    return (
      <div className="week">
        <p>DAY</p>
      </div>
    )
  }
}

export default Week;

// {days.map(function(day, i){
//   return (
//     <div className={this.getDayClassName(day)} key={i} onClick={this.select.bind(null, day)}>
//       {toDayOfMonthString(day)}
//     </div>
//   )
// })}



// React.createElement('div', { className: 'week' },
//   days.map(function (day, i) {
//     return React.createElement('div', { key: i, onClick: this.onSelect.bind(null, day), className: this.getDayClassName(day) }, toDayOfMonthString(day));
//   }.bind(this))
// );
