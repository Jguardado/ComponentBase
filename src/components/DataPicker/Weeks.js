import React, { Component } from 'react';
import Week from "./Week";
import { clone, moveToDayOfWeek } from './DateUtilities';

class Weeks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: clone(this.props.view),
      other: clone(this.props.view),
      sliding: null,
    };

    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.getWeekStartDates = this.getWeekStartDates.bind(this);
    this.moveTo = this.moveTo.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
  }

  componentDidMount() {
    console.log(this.onTransitionEnd);
    const current = clone(this.state.view);
    current.getDOMNode().addEventListener('transitionend', this.props.onTransitionEnd());
  }

  onTransitionEnd() {
    this.setState({
      sliding: null,
      view: clone(this.state.other),
    });

    this.props.onTransitionEnd();
  }

  getWeekStartDates(view) {
    view.setDate(1);
    view = moveToDayOfWeek(clone(view), 0);
    const current = clone(view);

    current.setDate(current.getDate() + 7);

    const starts = [view];
    const month = current.getMonth();

    while (current.getMonth() === month) {
      starts.push(clone(current));
      current.setDate(current.getDate() + 7);
    }

    return starts;
  }

  moveTo(view, isForward) {
    this.setState({
      sliding: isForward ? 'left' : 'right',
      other: clone(view),
    });
  }

  renderWeeks(view) {
    const starts = this.getWeekStartDates(view);
    const month = starts[1].getMonth();

    return console.log("days to come: ", starts);
    return (
      starts.map((s, i) => {
        return (
          <Week
            key={i}
            start={s}
            month={month}
            selected={this.props.selected}
            onSelect={this.props.onSelect.bind(this)}
            minDate={this.props.minDate.bind(this)}
            maxDate={this.props.maxDate.bind(this)}
          />
        );
      }));
  }

  render() {
    const outcome = 'current' + (this.state.sliding ? (' sliding ' + this.state.sliding) : '');
    const outcomeTwo = 'other' + (this.state.sliding ? (' sliding' + this.state.sliding) : '');

    return (
      <div className='weeks'>
        <Week/>
        <div className={outcome}>
          {this.renderWeeks(this.state.view)}
        </div>
        <div className={outcomeTwo}>
          {this.renderWeeks(this.state.other)}
        </div>
      </div>
    );
  }

}

export default Weeks
