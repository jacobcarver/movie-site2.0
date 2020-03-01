import React, { Component } from 'react';
import Container from './containers/Container';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
        		<BrowserRouter>
					<div className="app">
						<Container />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
