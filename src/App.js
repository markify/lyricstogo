import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';

// { } we need b/c not a default export from context
import Navbar from './component/layout/Navbar';
import Index from './component/layout/Index';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<React.Fragment>
						<Navbar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Index} />
							</Switch>
						</div>
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
}

export default App;
