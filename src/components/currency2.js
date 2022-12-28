import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { currency, dispatch, expenses } = useContext(AppContext);
	
	const changeCurrency = (curr) => {
		
		const totalExpenses = expenses.reduce ((currency, item) => {
			return (currency = document.getElementById("");
		}, 0);
		
		dispatch ({
			type: 'CHG_CURRENCY',
			payload: curr,
		})
		
	}
		
		
		
	}	
	
	
	return (
		<div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                        <option defaultValue="$">$ Dollar</option>
                        <option value="$" name="dollar">$ Dollar</option>
						<option value="£" name="pounds">£ Pounds</option>
						<option value="€" name="euro">€ Euro</option>
						<option value="₹" name="rupee">₹ Rupee</option>
                                  </select>
	);
};

export default Currency;


/*

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget,dispatch,expenses } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
	
	return (
		<div className='alert alert-secondary'>
			<input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
		</div>
	);
};

export default Budget;

*/