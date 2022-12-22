import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';



const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense
		});

	}
//Добавляем код для кнопки уменьшения
	const decreaseAllocation = (name) => {

		const red_expenses = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'RED_EXPENSE',
			payload: red_expenses
		});

	}
//тут
//*добавляем кнопку -*/
    const { currency } = useContext(AppContext);
	return (
		<tr>
		<td>{props.name}</td>
		<td>{currency}{props.cost}</td>
		<td><button onClick={event=> increaseAllocation(props.name)} id="butt"><img src="../green.jpg" alt="Increase" width="20px" border-color = "White"></img></button></td>

		<td><button onClick={event=> decreaseAllocation(props.name)}><img src="../red.jpg" alt="Decrease" width="20px" border="0"></img></button></td>

		<td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
		</tr>
	);
};
//*тут*/
export default ExpenseItem;
