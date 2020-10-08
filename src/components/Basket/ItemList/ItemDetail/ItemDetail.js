import React from 'react';
import Aux from '../../../../hoc/Aux/Aux'

import Button from '../../../UI/Button/Button';


const ItemDetail = props => {     
   
    
        return (
            <Aux>
                <h3></h3>
                <p>Product name: {props.name}</p>
                <ul>
                </ul>
                <p><strong>Quantity: {props.quantity}</strong></p>
                <p><strong>Price: ...</strong></p>
                <p>You can update this Item</p>
                <Button btnType="Danger" clicked={props.clicked}>PURCHASED</Button>
                <Button btnType="Success" >UPDATE</Button>
            </Aux>
        )
};

export default ItemDetail;