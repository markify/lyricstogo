import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav className="navbar navbar-dark mb-4" style={{ backgroundColor: '#3B5998' }}>
			<span className="nav-brand mb-0 h2 mx-auto " style={{ color: 'white' }}>
				<Link to="/" style={{ textDecoration: 'none', color: 'whitesmoke' }}>
					<i className="fas fa-music" /> Find Lyrics{' '}
				</Link>
			</span>
		</nav>
	);
};

export default Navbar;
