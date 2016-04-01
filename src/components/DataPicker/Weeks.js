import React, {Component} from 'react';
import DateUtilities from './DateUtilities';

class Weeks extends Component {

  constructor(props) {
    super(props);
    console.log('inside constructor');

    this.state = {
      view: DateUtilities.clone(this.props.view),
      other: DateUtilities.clone(this.props.view),
      sliding: null,
    };

    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.getWeekStartDates = this.getWeekStartDates.bind(this);
    this.moveTo = this.moveTo.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
  }

  componentDidMount() {
    this.refs.current.getDOMNode().addEventListener('transitionend', this.onTransitionEnd);
  }

  onTransitionEnd() {
    this.setState({
      sliding: null,
      view: DateUtilities.clone(this.state.other),
    });

    this.props.onTransitionEnd();
  }

  getWeekStartDates(view) {
    view.setDate(1);
    view = DateUtilities.moveToDayOfWeek(DateUtilities.clone(view), 0);

    const current = DateUtilities.clone(view);
    current.setDate(current.getDate() + 7);

    const starts = [view];
    const month = current.getMonth();

    while (current.getMonth() === month) {
      starts.push(DateUtilities.clone(current));
      current.setDate(current.getDate() + 7);
    }

    return starts;
  }

  moveTo(view, isForward) {
    this.setState({
      sliding: isForward ? 'left' : 'right',
      other: DateUtilities.clone(view),
    });
  }

  renderWeeks(view) {
    const starts = this.getWeekStartDates(view);
    const month = starts[1].getMonth();

    return (
      starts.map(function (s, i) {
        return (
          <Week
          key={i}
          start={s}
          month={month}
          selected= {this.props.selected}
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

    console.log('begining to render');

    return (
      <div className='weeks'>
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
