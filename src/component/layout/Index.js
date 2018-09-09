import React from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';
import Footer from './Footer';
// Hold search component and track component

const Index = () => {
	return (
		<React.Fragment>
			<Search />
			<Tracks />
			<Footer />
		</React.Fragment>
	);
};

export default Index;
