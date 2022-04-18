import React from 'react';
import './button.css'

const MyButton = ({onClick, children}) => {
    return (
        <button className='but' onClick={onClick}>{children}</button>
    );
}

export default MyButton;
