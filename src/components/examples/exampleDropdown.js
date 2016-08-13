import React, { Component } from 'react';

//Dropdowns can be used in many ways.
//they can be positioned on the side of teh screen acting as a sidebar.
//This functionallity it primariluy based on CSS and positioning.

//As well the choice to use "onMouseOver" is to show functionallity but can easily be replaced with
//'onMouseLeave', "onMouseEnter", or any o teh other react event handlers.

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    //List is added below beacuse this componeent is not currently linked to any model or props chain.

    this.state = {
      listVisible: false,
      list: ['one', 'two', 'three'],
      button:'',
    };

    this.select = this.select.bind(this);
    this.renderList = this.renderList.bind(this);
    this.makeVisable = this.makeVisable.bind(this);

  }

  select(item) {
    //this is where you would pass the selected item to your models
    console.log('this is supposed to be item', item);
  }

  makeVisable(btnName) {
    console.log('mouse over activated');
    this.setState({ listVisible: !this.state.listVisible }, console.log(this.state.listVisible));
  }

  renderList() {
    if (this.state.listVisible) {
      var items = [];

      //this is where you would be able to iterate over any collection pulled in through props.
      for (var i = 0; i < this.state.list.length; i++) {
        items.push(<div onClick={this.select.bind(this, this.state.list[i])}>
        <li>{this.state.list[i]}</li>
        </div>);
      }

      return items;

    } else {
      return <div>Select List</div>;
    }

  }

  render() {
    return (
      <div>
      <legend className='headingtext'>Example Dropdown</legend>
        <div className='inline'>
        <label>MouseOver</label>
          <button className='btn btn-primary blocked' onMouseOver={this.makeVisable}>List of items</button>
        </div>
        {this.renderList()}
      </div>
    );
  }

}
