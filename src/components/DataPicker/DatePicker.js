import React, { Component } from 'react';
import Calendar from './Calender';
import DateUtilities from './DateUtilities';

class DatePicker extends Component {

  constructor(props) {
    super(props);

    // console.log('this is DateUtilities', DateUtilities.prototype);
    var def = this.props.selected || new Date();

    return {
      view: DateUtilities.prototype.clone(def),
      selected: DateUtilities.prototype.clone(def),
      minDate: null,
      maxDate: null,
      visible: false,
    };

    this.setMinDate = this.setMinDate.bind(this);
    this.setMaxDate = this.setMaxDate.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.parentsHaveClassName = this.parentsHaveClassName.bind(this);
    this.onSelect = this.onSelect.bind(this);

  }

  componentDidMount() {
    document.addEventListener('click', function (e) {
      if (this.state.visible && e.target.className !== 'date-picker-trigger' && !this.parentsHaveClassName(e.target, 'date-picker'))
      this.hide();
    }.bind(this));
  }

  parentsHaveClassName(element, className) {
    var parent = element;
    while (parent) {
      if (parent.className && parent.className.indexOf(className) > -1)
      return true;

      parent = parent.parentNode;
    }
  }

  setMinDate(date) {
    this.setState({ minDate: date });
  }

  setMaxDate(date) {
    this.setState({ maxDate: date });
  }

  onSelect(day) {
    this.setState({ selected: day });
    this.props.onSelect(day);
    this.hide();
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {

    return (
      <div className='ardp-date-picker'>
        <input
          type='text'
          className='date-picker-trigger'
          value={DateUtilities.prototype.toString(this.state.selected)}
          onClick={this.show } />
        <Calendar
          visible={ this.state.visible }
          view={ this.state.view }
          selected={ this.state.selected }
          onSelect={ this.onSelect }
          minDate={ this.state.minDate }
          maxDate={ this.state.maxDate }/>
      </div>
    );

  }

}

export default DatePicker;
