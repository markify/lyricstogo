import React from 'react';
import loader from './loader.gif';

export default () => {
	return (
		<div>
			<img src={loader} alt="Loading data.." style={{ width: '210px', margin: '40px auto', display: 'block' }} />
		</div>
	);
};
