import React, { Component } from 'react';
import { Link } from 'react-router';

// this is going to be the actual header and utilize react router.

// NOTE: frist I need to identify the routes that I want to use and where else
//in the page I want people to go.

//Contemplating moving the components to a seperate page to free up space to
//advertise Component base and the idea of a open source compent library

//TODO:
//Add link to github
//Add link to blog
//Add link to react docs
//link to seperate page for components

export default class Header extends Component {
    render() {
      return (
        <div className='navbar head'>
          <h5>
          <Link to='/' className='col-md-1'>Home</Link>
          <a className='col-md-1' href='https://github.com/Jguardado'>GitHub</a>
          <a className='col-md-1' href='https://jguardado.github.io/'>Blog</a>
          <Link to='/component' className='col-md-1'>Samples</Link>
          </h5>
          <h4 className='col-md-offset-10 jumobotext'>ComponentBase</h4>
        </div>
      );
    }
  }
