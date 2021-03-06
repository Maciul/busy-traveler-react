import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import Results from './containers/Results/Results';
import Header from './containers/Header/Header';
import DisplayBody from './containers/DisplayBody/DisplayBody';

import './App.css';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<DisplayBody>
					<Switch>
						<Route path="/results" component={Results} />
						<Route path="/" component={MainPage} />
					</Switch>
				</DisplayBody>
			</React.Fragment>
		);
	}
}

export default App;
