import React from 'react';

const Track = (props) => {
	//destructuring instead of using props.tracks everywhere
	const { track } = props;

	return (
		<div className="col-md-6">
			<div className="card mb-4 shadow-sm">
				<div className="card-body">
					<h4> {track.artist_name}</h4>
				</div>
			</div>
		</div>
	);
};

export default Track;
