import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class App extends Component  {
  render() {
    return (
      <Router>
      </Router>
    )
  }
  
}

export default connect()(App);
