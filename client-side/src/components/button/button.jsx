import React from 'react';
import './button.scss';

const Button = (props)=>{
    return(
        <button className='custom-button'>{props.name}</button>
    )
}

export default Button;