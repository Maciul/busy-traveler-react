import React, { Component } from 'react';
import MainPage from './containers/MainPage/MainPage';
import Results from './containers/Results/Results'
import Header from './containers/Header/Header'
import DisplayBody from './containers/DisplayBody/DisplayBody'
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    let routes = (
        <Switch> 
          <Route path="/results" component={ Results } /> 
          <Route path="/" component={ MainPage } /> 
        </Switch>
      );
    return (
      <React.Fragment> 
        <Header />
        <DisplayBody>
          { routes }
        </DisplayBody>
      </React.Fragment>
    );
  }
}

export default App;
