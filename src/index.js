import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './store/middleware/logger';
import monitorReducerEnhancer from './store/enhancers/monitorReducer';
import reducer from './store/reducers/reducers';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = composeWithDevTools(
	middlewareEnhancer,
	monitorReducerEnhancer
);
// eslint-disable-next-line no-unused-vars
const store = createStore(reducer, undefined, composedEnhancers);

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
