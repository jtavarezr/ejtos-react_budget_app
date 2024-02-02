import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const maxBudget = 20000;
    const handleBudgetChange = (event) => {
        if (event.target.value > maxBudget) {
            alert("The value cannot exceed £"+maxBudget);            
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (newBudget < totalExpenses) {
            alert("You can not reduce the budget value lower than spending");
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input  type="number" 
        step="10" 
        max={maxBudget}
        min={0}
        value={newBudget} 
        onChange={handleBudgetChange}>
            
        </input>
</div>
    );
};
export default Budget;

