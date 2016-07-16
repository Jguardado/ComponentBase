import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Intro extends Component {
  render() {
    return (
      <div className='intro mainTwo'>
        <p className='headingtext tab'>ComponentBase is a library compiled of commonly
        used a <Link to='/component'>components</Link> and is intended for the use in personal
        construction of React websites.</p>

        <p className='headingtext tab'>The goal is to provide readily compatible code
        snippets that can be dropped into any project without the hassle of added NPM
        modules or a litany of documentation that must be read simply to determine whether
        or not this component is the right fit for your project.</p>

        <p className='headingtext tab'>This library is a work in progress.
        Being a product of the code I learned from other open source projects I welcome
        <a href='https://github.com/Jguardado/ComponentBase/issues'> contributions and review</a>. If there are any recommendation for best practice usage
        Ill be happy to review and integrate your suggestions into this library.</p>

        <p className='headingtext tab'>For an awesome starter kick with webpack configurations
        I recommend you check out <a href='https://github.com/colinlmcdonald/react-redux-webpack'>react-redux-webpack</a> by Colin McDonald. Its a great way for anyone
        to get a jump start on thir projects.</p>
      </div>
    );
  }
}
