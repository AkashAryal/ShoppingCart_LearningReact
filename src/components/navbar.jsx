import React, { Component } from 'react';

export default class NavBar extends Component {
  render(){
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          NavBar
        </a>
      </nav>
    );
  }
}