import React, { Component } from 'react';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listVisible: false,
      list: ['one', 'two', 'three'],
    };

    this.select = this.select.bind(this);
    this.renderList = this.renderList.bind(this);
    this.makeVisable = this.makeVisable.bind(this);

  }

  select(item) {
    //this is where you would pass the selected item to your models
    console.log('this is supposed to be item', item);
  }

  makeVisable() {
    console.log('mouse over activated');
    this.setState({ listVisible: !this.state.listVisible }, console.log(this.state.listVisible));
  }

  renderList() {
    if (this.state.listVisible) {
      var items = [];

      //this is where you would be able to iterate over any collection pulled in through props.
      for (var i = 0; i < this.state.list.length; i++) {
        items.push(<div onClick={this.select.bind(this, this.state.list[i])}>
        <span>{this.state.list[i]}</span>
        </div>);
      }

      return items;

    } else {
      return <div></div>;
    }

  }

  render() {
    return (
      <div>
      <legend>EXAMPLE DROPDOWN</legend>
        <h6 onMouseOver={this.makeVisable}>List of items</h6>
        {this.renderList()}
      </div>
    );
  }

}
