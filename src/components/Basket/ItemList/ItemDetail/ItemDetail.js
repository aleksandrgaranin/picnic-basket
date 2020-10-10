
import React from 'react';
import Aux from '../../../../hoc/Aux/Aux'
import classes from './ItemDetail.module.css';

import Button from '../../../UI/Button/Button';


const ItemDetail = props => {   

    let detail = 
        (<div className={classes.ItemDetails}>
            <p>{props.name}</p> 
            <p><strong>Quantity: {props.quantity}</strong></p>
        </div>)

    if(props.show){
        detail = (
            <div>
                <div className={classes.ItemDetails}>
                    <p>Product name: {props.name}</p>            
                    <p><strong>Quantity: {props.quantity}</strong></p>
                    <p><strong>Price: ...</strong></p>
                </div>
                    <p>You can update this Item</p>

                <Button btnType="Warning" >PURCHASED</Button>
                <Button btnType="Success" >UPDATE</Button>
                <Button btnType="Danger" clicked={props.delete} >DELETE</Button>
            </div>  
        )
    }

    return (
        <Aux>
            {detail}
        </Aux>
    )
};

export default ItemDetail;