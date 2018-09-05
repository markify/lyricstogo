import React, { Component } from 'react';
import { Consumer } from '../../context';
import Loader from '../layout/Loader';
import Track from '../tracks/Track';
// Search, Lyrics, Tracks, API
// class base component
class Tracks extends Component {
	render() {
		return (
			//logs on console
			// Spinner, value api to array
			<Consumer>
				{(value) => {
					const { track_list, heading } = value;
					// if tracks array not full or missing show spinner
					if (track_list === undefined || track_list.length === 0) {
						return <Loader />;
					} else {
						return (
							// using map to list needs key
							<React.Fragment>
								<h3 className="text-center mb-4"> {heading} </h3>
								<div className="row">
									{track_list.map((item) => <Track track={item.track} key={item.track.track_id} />)}
								</div>
							</React.Fragment>
						);
					}
				}}
			</Consumer>
		);
	}
}

export default Tracks;
