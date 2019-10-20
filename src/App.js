import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from './components/counters';

export default class App extends Component{
  render(){
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
    </React.Fragment>
    );
  }
}
