import React from 'react';
import './button.scss';

const Button = (props)=>{
    return(
        <button>{props.name}</button>
    )
}

export default Button;