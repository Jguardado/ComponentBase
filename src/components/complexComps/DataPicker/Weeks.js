class Weeks extends Component {

  getInitialState() {
    return {
      view: DateUtilities.clone(this.props.view),
      other: DateUtilities.clone(this.props.view),
      sliding: null,
    };
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

    var current = DateUtilities.clone(view);
    current.setDate(current.getDate() + 7);

    var starts = [view],
    month = current.getMonth();

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

  render() {
    const outcome = 'current' + (this.state.sliding ? (' sliding ' + this.state.sliding) : '');
    const outcomeTwo = 'other' + (this.state.sliding ? (' sliding' + this.state.sliding) : '');

    return (
      <div className='weeks'>
        <div ref='current' className={outcome}>
          {this.renderWeeks(this.state.view)}
        </div>
        <div ref='other' className={outcomeTwo}>
          {this.renderWeeks(this.state.other)}
        </div>
      </div>
    );
  }

renderWeeks(view) {
  var starts = this.getWeekStartDates(view),
  month = starts[1].getMonth();

  return (
    starts.map(function (s, i) {
      return (
        <Week
          key=i
          start=s
          month=month
          selected= {this.props.selected}
          onSelect={this.props.onSelect.bind(this)}
          minDate={this.props.minDate.bind(this)}
          maxDate={this.props.maxDate.bind(this)}/>
      )
    })

}

}
