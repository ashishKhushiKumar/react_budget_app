import React, { useState } from 'react';

const Currency = () => {
    const [changeCurrency] = useState('');
    return (
            <div className='alert alert-secondary' style={{ backgroundColor: 'lightgreen' }}> Currency {
                <select name="currency" id="currency" onChange={event => changeCurrency(event.target.value)}>
                    <option value="£" style={{ backgroundColor: 'lightgreen', color: 'black' }}>Uk(£)</option>
                    <option value="₹" style={{ backgroundColor: 'lightgreen', color: 'black' }}>Ruppee(₹)</option>
                    <option value="€" style={{ backgroundColor: 'lightgreen', color: 'black' }}>Euro(€)</option>
                    <option value="$" style={{ backgroundColor: 'lightgreen', color: 'black' }}>Dollar($)</option>
                </select>	
            }	
        </div>
        );
};

export default Currency;