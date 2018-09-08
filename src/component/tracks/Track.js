import React from 'react';
import { Link } from 'react-router-dom';
const Track = (props) => {
	//destructuring instead of using props.tracks everywhere
	const { track } = props;

	return (
		<div className="col-md-6">
			<div className="card mb-4 shadow-sm">
				<div className="card-body">
					<h4> {track.artist_name}</h4>
					<p className="card-text">
						<strong>
							<i className="far fa-play-circle" /> Track{' '}
						</strong>{' '}
						: {track.track_name}
						<br />
						<strong>
							<i className="fas fa-headphones-alt" /> Album{' '}
						</strong>{' '}
						: {track.album_name}{' '}
					</p>
					<Link to={`lyrics/track/${track.track_id}`} className="btn btn-primary btn-block">
						<i class="fas fa-angle-right" /> View Lyrics
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Track;
