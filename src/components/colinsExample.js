import React, { Component } from 'react';

function HelloMessage(person) {
  return (
    <div>Hello {person.name} </div>
  );
}

var WhitHouse = React.createClass({
  getIntialState: function () {
    return {
      representative: {
        title: 'Prez',
        name: 'Obama',
      },
    };
  },

  render: function () {
    return (
      <div>
        White House Peeps
        <HelloMessage name={this.state.representative} />
      </div>
    );
  },
});
