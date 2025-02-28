import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './currency.css';

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
		<div className="alert alert-dark" >
		
                    <div className="input-group-prepend">
                <label  htmlFor="inputGroupSelect01" >Currency</label>
                				
                  <select className="custom-select" id="inputGroupSelect01"  onChange={(event) => changeCurrency(event.target.value)}>
                       <option defaultValue>Select currency...</option>
                        <option value="$" name="dollar">$ Dollar</option>
						<option value='£' name="pounds">£ Pounds</option>
						<option value="€" name="euro">€ Euro</option>
						<option value="₹" name="rupee">₹ Rupee</option>
                                  </select>
			</div> 
		</div>
		</div>
	);
};

export default Currency;

/*
<select class="select" name="colors" onchange="this.style.backgroundColor=this.options[this.selectedIndex].style.backgroundColor"> 
    <option style="background-color:red" value="red">Red</option> 
    <option style="background-color:green" value="green">Green</option>
</select>
*/