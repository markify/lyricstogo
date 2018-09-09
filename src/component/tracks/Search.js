import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
class Search extends Component {
	state = {
		trackTitle: ''
	};
	// Consume => Destructuring => binding => function call dispatch
	// now we have acess to dispatch function
	findTrack = (dispatch, e) => {
		e.preventDefault();
		axios
			.get(
				`http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state
					.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=
				${process.env.REACT_APP_MXM_KEY}`
			)
			.then((res) => {
				//once we get the results
				dispatch({
					//action type for reducer on context.js
					type: 'SEARCH_TRACKS',
					payload: res.data.message.body.track_list
				});
				// resets search input
				this.setState({ trackTitle: '' });

				//console.log(res.data);
				//this.setState({ track_list: res.data.message.body.track_list });
			})
			.catch((err) => console.log(err));
	};

	onChange = (e) => {
		// tracks the name field (trackTitle) without making multiple onChange if we have multiple forms
		// every time trackTitle changes it keeps track of the changes using anonymous function and e.target.name
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<Consumer>
				{(value) => {
					//destructuring , global state => pull dispatch from value then pass to form findTrack on submit
					const { dispatch } = value;

					return (
						<div className="card card-body mb-4 p-4">
							<h1 className="display-4 text-center">
								<i className="fas fa-music" style={{ color: '#3B5998' }} />
								<span style={{ color: '#3B5998' }}> Search for a Song </span>
							</h1>
							<p className="lead text-center">Get lyrics for any song</p>
							<form onSubmit={this.findTrack.bind(this, dispatch)}>
								<div className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Song title.."
										name="trackTitle"
										value={this.state.trackTitle}
										onChange={this.onChange}
									/>
								</div>
								<button
									className="btn btn-primary btn-lg btn-block"
									style={{ backgroundColor: '#3B5998' }}
									type="submit"
								>
									{' '}
									Get Track Lyrics{' '}
								</button>
							</form>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Search;
