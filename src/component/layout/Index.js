import React from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';

// Hold search component and track component

const Index = () => {
	return (
		<React.Fragment>
			<Search />
			<Tracks />
		</React.Fragment>
	);
};

export default Index;
