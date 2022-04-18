import React, { useState } from 'react';
import MyButton from '../MyButton/MyButton';
import './modal.css'

const MyModal = ({active, setActive, addBank}) => {
    const template = {name: null, intRate: null, maxLoan: null, minPay: null, loadTerm: null}
    const [newBank, setNewBank] = useState(template)
    return (
        <div 
            className={active ? 'modal active' : 'modal'}
            onClick = {() => {setActive(false); setNewBank(template)}}>
                <div className='modal_content' onClick = {(e) => e.stopPropagation()}>
                    <form action="">
                        <label>Bank name:</label>
                        <input type="text" name="" id="" onChange={(e) => setNewBank({...newBank, name: e.target.value})}/>
                        <label>Interest Rate:</label>
                        <input type="text" name="" id="" onChange={(e) => setNewBank({...newBank, intRate: e.target.value})}/> 
                        <label>Max loan:</label>
                        <input type="text" name="" id="" onChange={(e) => setNewBank({...newBank, maxLoan: e.target.value})}/> 
                        <label>Min down payment:</label>
                        <input type="text" name="" id="" onChange={(e) => setNewBank({...newBank, minPay: e.target.value})}/>
                        <label>Load term:</label>
                        <input type="text" name="" id="" onChange={(e) => setNewBank({...newBank, loadTerm: e.target.value})}/>
                        <MyButton onClick={(e) => {
                            e.preventDefault()
                            addBank(newBank)
                            setNewBank(template)
                            setActive(false)
                        }}>Add</MyButton>
                    </form>
                </div>
        </div>
    );
}

export default MyModal;
