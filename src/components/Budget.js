import React, { useContext, useState } from 'react';
import  { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, expenses } = useContext(AppContext);
    const { budget, setBudget } = useState('')
    return (
        <div className = 'alert alert-secondary'>
            <span>
                Budget: {currency} 
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step="10"
                    max="20000"
                    value={budget}
                    style={{ marginLeft: '0.25rem'}}
                    onChange={(event) => { 
                        const totalExpenses = expenses.reduce((sum, item) => {
                            return (sum = sum + item.cost);
                          }, 0);
                        if(event.target.value > 20000) {
                            alert ('The budget value cannot exceed £20,000.');
                            setBudget("");
                        } else if (event.target.value < totalExpenses) {
                            alert("The budget value cannot be lower than the expenses.");
                            setBudget("");
                        } else {
                            setBudget(event.target.value)
                        }
                     }}>
                </input>
            </span> 
        </div>
    );
}

export default Budget;
