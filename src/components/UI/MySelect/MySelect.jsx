import React from 'react';
import './select.css'

const MySelect = ({banks, callback}) => {
    return (
        <select className='bank_select'>
            <option disabled selected="selected">Choose bank to calculate your monthly payment:</option>
            {banks.map(bank => <option className='bank_option' key={bank.id} onClick={() => callback(bank)}>{bank.name}</option>)}
        </select>
    );
}

export default MySelect;
