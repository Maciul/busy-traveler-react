import React, { Component } from 'react';
import axios from 'axios'
import logo from './terrain.png';
import InputForm from './containers/InputForm/InputForm';
import Results from './containers/Results/Results'
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    let routes = (
        <Switch> 
          <Route path="/results" component={ Results } /> 
          <Route path="/" component={ InputForm } /> 
        </Switch>
      );
    return (
    
        <header className="App-header">
          { routes }
          <a href="google.com"> Fkjhdfjksd </a>
          <button onClick={this.makeRequestForData} > Lets Go! </button>
        </header>
    );
  }
}

export default App;
