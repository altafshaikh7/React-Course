
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c= 'altaf'
  render() {
    return (
      <div>
        Hello my first classed based component!
        {this.c}
      </div>
    )
  }
}

