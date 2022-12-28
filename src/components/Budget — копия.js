/*
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


import { budget } from '../context/AppContext';

import { currency } from '../context/AppContext';
 
	
const Budget = () => {
	const { budget } = useContext(AppContext);		
	
	

	return (
		<div className='alert alert-secondary'>
			<span>Budget: {currency}{budget - totbud}<input type="number" min = "0"step = "10" placeholder = {budget} onchange={(event) => totbud(this.value)   }></input>
				
			</span>
			
		</div>
	);
};

export default Budget;
*/
////



import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
	let { currency } = useContext(AppContext);
	const { budget } = useContext(AppContext);
	let budg = document.getElementById(budg).value;
	

	return (
		<div className='alert alert-secondary'>
			<span>Budget: {currency}{budget - budg }<input type="number" id="budchg" step="10" placeholder={currency} onchange='budg(this.value)'></input> </span>
		</div>
	);
};

export default Budget;
