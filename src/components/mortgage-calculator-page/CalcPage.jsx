import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { calculate } from '../functions/banks';
import MyButton from '../UI/MyButton/MyButton';
import MySelect from '../UI/MySelect/MySelect';

const CalcPage = () => {
    const location = useLocation()
    const banks = location.state.banks
    const [usedBank, setUsedBank] = useState('Choose bank to calculate your monthly payment:')
    const [initialLoad, setInitialLoad] = useState('')
    const [monthPayment, setMonthPayment] = useState('')
    const onChange = useCallback((e) => {
        setInitialLoad(e.target.value)
    }, [])
    return (
        <div className='calc_page'>
            <input placeholder='Choose bank and input load' type="text" onChange={(e) => onChange(e)}/>
            <MySelect bank = {usedBank} callback={setUsedBank} banks={banks}/>
            <MyButton 
                onClick={() => setMonthPayment(calculate(Number(usedBank.intRate), Number(usedBank.minPay), Number(initialLoad), Number(usedBank.loadTerm)))}>Calc</MyButton>
            <div className='mp'>{monthPayment === undefined || isNaN(monthPayment) ? 'Input correct value!' : `${monthPayment}$` }</div>
        </div>
    );
}

export default CalcPage;
