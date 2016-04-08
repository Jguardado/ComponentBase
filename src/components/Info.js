import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <div className='right'>
        <p>{this.props.info}</p>
        <code>{'import body { color: blue; }'}</code>
        <div>
          <a className='gitLink' href={this.props.github}>GET THE CODE</a>
        </div>
      </div>
    );
  }
}
