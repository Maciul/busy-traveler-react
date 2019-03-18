import React, { Component } from 'react';
import InputForm from './containers/InputForm/InputForm';
import Results from './containers/Results/Results'
import Header from './containers/Header/Header'
import { Route, Switch } from 'react-router-dom';
import logo from './terrain.png'

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
      <React.Fragment> 
        <Header />
        <main className="App-main">
          { routes }
        </main>
        </React.Fragment>
    );
  }
}

export default App;
