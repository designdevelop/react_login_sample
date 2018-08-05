import React from 'react';
import ReactDOM from 'react-dom';

// Redux Component Import
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import promise from 'redux-promise';

import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)


ReactDOM.render(
	<Provider store = {createStoreWithMiddleware(reducers)}>
		<App/>
	</Provider>
, document.getElementById('root'));
