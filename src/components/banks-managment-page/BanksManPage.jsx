import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeBank, localBanks } from '../functions/banks';
import { addBank, deleteBank } from '../functions/banks';
import MyButton from '../UI/MyButton/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import BankInfo from './BankInfo';

const BanksManPage = () => {
    const router = useNavigate()
    const [modal, setModal] = useState(false)
    const [banks, setBanks] = useState(
        JSON.parse(localStorage.getItem('Bank')));
    const [modalFunction, setModalFunction] = useState(false)
    const [clicked, setClicked] = useState(null)
    useMemo(() => {
        localBanks(banks)
    }, [banks]);
    const callbacks= {
        toAdd: (newBank) => {
        addBank(banks, newBank, setBanks)
    },
        toEdit: (edited) => {
        changeBank(clicked, edited, banks, setBanks)
    }
    }
    return (
        <div className='banks_page'>
            {banks.map(bank => <BankInfo 
                edit = {() => {setModalFunction(true); setClicked(bank); setModal(true)}}
                uninstall={(someBank) => deleteBank(banks, someBank, setBanks)} 
                bank={bank} 
                key={bank.id}/>)}
            <div>
                <MyButton onClick={() => {setModalFunction(false); setModal(true); console.log(modalFunction)}}>Add Bank</MyButton>
                <MyButton onClick={() => router('/calc', {state:{banks}})}>Calc</MyButton>
            </div>
            <MyModal active={modal} setActive={setModal} choose={modalFunction} callbacks = {callbacks}/>
        </div>
    );
}

export default BanksManPage;
