import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

// export a consumer aswell
// context provider

export class Provider extends Component {
	// changes the state of tracks
	// this data will be use for the api calls
	state = {
		track_list: [],
		// when search it becomes the search results heading
		heading: 'Top 10 Tracks'
	};
	// class component
	// CORS invalid error when fetching api
	// use https://cors-anywhere.herokuapp.com/
	// &apikey=${process.env.REACT_APP_MXM_KEY}`

	// If fetched array is full loading spinner is done
	componentDidMount() {
		axios
			.get(
				`http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=
				${process.env.REACT_APP_MXM_KEY}`
			)
			.then((res) => {
				console.log(res.data);
				this.setState({ track_list: res.data.message.body.track_list });
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			// uses a state so we can access other component
			<Context.Provider value={this.state}>{this.props.children}</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
