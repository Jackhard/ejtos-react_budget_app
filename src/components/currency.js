import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { currency } = useContext(AppContext);

	return (
		<div className='alert alert-secondary'>
			<span>Currency: {currency}</span>
		</div>
	);
};

export default Currency;
