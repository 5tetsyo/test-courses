import React from 'react';

const BankInfo = ({bank, uninstall, edit}) => {
    function getIsCorrect() {
        const values = Array.from(Object.values(bank));
        return values.every(value => value !== null)
    }
    const isCorrect = getIsCorrect()
    return (
        <div className='bank_item'>
                {!isCorrect ? 
                'Wrong values!' : 
            <div>
                <div>{bank.name}</div>
                <div>{bank.intRate}%</div>
                <div>{bank.maxLoan}$</div>
                <div>{bank.minPay}%</div>
            </div>}
            <div className='unAndEdit'>
            <div onClick={() => uninstall(bank)}>Delete bank</div>
            <div onClick={() => edit(bank)}>Edit bank</div>
            </div>
        </div>
    );
}

export default BankInfo;
