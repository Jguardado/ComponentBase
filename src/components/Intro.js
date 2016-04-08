import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <div className='container intro mainTwo'>
        <p className='container headingtext'>ComponentBase is a library that is compiled of commonly used a components and is intended for the use in personal construction of React websites.
        The goal is to provide readily compatible code snippets that can be dropped into any project without the hassle
        of added NPM modules or a litany of documentation that must be read simply to determine whether or not this component
        is the right fit for your project.</p>

        <p className='container headingtext'>This library is a work in progress. Being a product of the code I learned from other open source projects I welcome contributions and review. If there is a recommendation for best practice usage Im sure I can find a way to integrate that into this library as well.</p>
      </div>
    );
  }
}
