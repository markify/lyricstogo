import React, { Component } from 'react';
import { Consumer } from '../../context';
// Search, Lyrics, Tracks, API
// class base component
class Tracks extends Component {
	render() {
		return (
			//logs on console
			<Consumer>
				{(value) => {
					console.log(value);
					return <h1> Tracks</h1>;
				}}
			</Consumer>
		);
	}
}

export default Tracks;
