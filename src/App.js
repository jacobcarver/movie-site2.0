import React from 'react';
import Container from './containers/Container';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './scss/main.scss';

import store from './redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="app">
					<Container />
				</div>
			</BrowserRouter>
		</Provider>
	)
}

export default App;
