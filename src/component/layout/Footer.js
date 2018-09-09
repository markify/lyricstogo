import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<footer className="footer text-center">
			<div
				className="container"
				style={{
					paddingTop: '40px',
					paddingBottom: '25px'
				}}
			>
				View the source for this project at{' '}
				<i className="fab fa-github-square" style={{ textDecoration: 'none', fontSize: '1.5em' }} />
				<br />
				<Link to={`https://github.com/markify/find-lyrics`}>https://github.com/markify/find-lyrics</Link>
			</div>
		</footer>
	);
};

export default Footer;
