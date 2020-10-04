import React from 'react';
import classes from './Item.module.css';

const item = (props) => {
    console.log(props)
    return(
    <div className={classes.Item}>
        <p>{props.name} Qty: <strong>{props.quantity}</strong></p>
        <p></p>
    </div>
    );
}


export default item;