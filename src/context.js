import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

// export a consumer aswell
// context provider
// reducers can be called middleman
const reducer = (state, action) => {
	switch (action.type) {
		case 'SEARCH_TRACKS':
			return {
				...state,
				track_list: action.payload,
				heading: 'Search Results'
			};
		default:
			return state;
	}
};
export class Provider extends Component {
	// changes the state of tracks
	// this data will be use for the api calls
	// when search it becomes the search results heading
	state = {
		dispatch: (action) => this.setState((state) => reducer(state, action)),
		track_list: [],
		heading: 'Top 10 Tracks in US'
	};
	// class component
	// CORS invalid error when fetching api
	// use https://cors-anywhere.herokuapp.com/ or a chrome plugin for cors
	// &apikey=${process.env.REACT_APP_MXM_KEY}`

	// If fetched array is full loading spinner is done
	componentDidMount() {
		axios
			.get(
				`http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=
				${process.env.REACT_APP_MXM_KEY}`
			)
			.then((res) => {
				//console.log(res.data);
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
