import React, { Component } from 'react';
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
        </header>
    );
  }
}

export default App;
