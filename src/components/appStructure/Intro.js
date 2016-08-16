import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Intro extends Component {
  render() {
    return (
      <div className='intro mainTwo'>
        <p className='headingtext tab'>ComponentBase is a library of commonly
        used React <Link to='/component'>components</Link>. It is a tool for Engineers. Each
        component is designed to be easily integrated into your own applications.</p>

        <p className='headingtext tab'>The goal is to provide readily compatible code
        snippets that can be dropped into any application without the hassle of added NPM
        modules. Often times documenation for libraries can be hard to find and even harder to read.
        ComponentBase is my response. By putting the code directly in Engineers hands, with psuedocoded explanations,
        Engineers can incoperate any part of the snippet that might be useful for their current application.
        </p>

        <p className='headingtext tab'>This library is a work in progress. I encourage all Engineers,
        seasoned and novice, to add-in this effort. If there is a comment you would like to add, feel free
        to make a pull request. Being an advocate of open-source I welcome
        <a href='https://github.com/Jguardado/ComponentBase/issues'>contributions and review</a>.
        I will be happy to review and integrate your suggestions into this library.                                        </p>

        <p className='headingtext tab'>For an awesome starter kick with webpack configurations
        I recommend you check out: <a href='https://github.com/colinlmcdonald/react-redux-webpack'>react-redux-webpack</a> by Colin McDonald.
        It is a great way for anyone to get a jump start on their projects.                                        </p>
      </div>
    );
  }
}
