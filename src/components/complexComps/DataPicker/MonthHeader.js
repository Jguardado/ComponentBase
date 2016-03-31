import React, { Component } from 'react';

export default class MonthHeader extends Component {

  constructor(props) {
    super(props);

    return {
      view: DateUtilities.clone(this.props.view),
      enabled: true,
    };

    this.moveBackward = this.moveBackward.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.move = this.move.bind(this);
    this.enable = this.enable.bind(this);
  }

  moveBackward() {
    var view = DateUtilities.clone(this.state.view);
    view.setMonth(view.getMonth() - 1);
    this.move(view, false);
  }

  moveForward() {
    var view = DateUtilities.clone(this.state.view);
    view.setMonth(view.getMonth() + 1);
    this.move(view, true);
  }

  move(view, isForward) {
    if (!this.state.enabled) {
      return;
    }

    this.setState({
      view: view,
      enabled: false,
    });

    this.props.onMove(view, isForward);
  }

  enable() {
    this.setState({ enabled: true });
  }

  render() {
    var enabled = this.state.enabled;
    return (
      <div className='month-header'>
        <i onClick={this.moveBackward} />
          <span>{DateUtilities.toMonthAndYearString(this.state.view)}</span>
        <i onClick={this.moveForward} />
      </div>

    );

  }

}

// React.createElement('i', { className: (enabled ? '' : ' disabled'), onClick: this.moveBackward }, String.fromCharCode(9664)),
// React.createElement('span', null, DateUtilities.toMonthAndYearString(this.state.view)),
// React.createElement('i', { className: (enabled ? '' : ' disabled'), onClick: this.moveForward }, String.fromCharCode(9654));
