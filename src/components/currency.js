/*
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { currency, dispatch,expenses } = useContext(AppContext);
	
	
	
	
	return (
		<div className='alert alert-warning'>
			<span>Currency: {currency}</span>
		</div>
	);
};

export default Currency;
*/



import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { currency,dispatch,expenses } = useContext(AppContext);
	const [curr, setCurr] = useState('');

	const changeCurrency = (curr)=>{
		const totalExpenses = expenses.reduce((currency, curr) => {
		
		currency = curr;
		
			return (currency);
		}, 0);

		
		dispatch({
			type: 'CHG_CURRENCY',
			payload: curr,
			})
			// }
	};
	
	return (
		<div>
		<div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                       <option defaultValue="$">$ Dollar</option>
                        <option value="$" name="dollar">$ Dollar</option>
						<option value='£' name="pounds">£ Pounds</option>
						<option value="€" name="euro">€ Euro</option>
						<option value="₹" name="rupee">₹ Rupee</option>
                                  </select>
		</div>
		</div>
	);
};

export default Currency;

