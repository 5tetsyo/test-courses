import React from 'react';

const BankInfo = ({bank}) => {
    return (
        <div className='bank_item'>
            <div>{bank.name}</div>
            <div>{bank.intRate}%</div>
            <div>{bank.maxLoan}$</div>
            <div>{bank.minPay}%</div>
        </div>
    );
}

export default BankInfo;
