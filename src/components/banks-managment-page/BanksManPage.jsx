import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { localBanks } from '../functions/banks';
import { addBank } from '../functions/banks';
import MyButton from '../UI/MyButton/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import BankInfo from './BankInfo';

const BanksManPage = () => {
    const router = useNavigate()
    const [modal, setModal] = useState(false)
    const [banks, setBanks] = useState(
        JSON.parse(localStorage.getItem('Bank')));
    useMemo(() => {
        localBanks(banks)
    }, [banks]);
    return (
        <div className='banks_page'>
            {banks.map(bank => <BankInfo bank={bank} key={bank.id}/>)}
            <div>
                <MyButton onClick={() => setModal(true)}>Add Bank</MyButton>
                <MyButton onClick={() => router('/calc', {state:{banks}})}>Calc</MyButton>
            </div>
            <MyModal active={modal} setActive={setModal} addBank={(newBank) => {addBank(banks, newBank, setBanks)}}/>
        </div>
    );
}

export default BanksManPage;
