import React from 'react';

import Button from '../../../UI/Button/Button';


const ItemDetail = props => {   
       
        return (
            <div>
                <h3></h3>
                <p>Product name: {props.name}</p>
                <ul>
                </ul>
                <p><strong>Quantity: {props.quantity}</strong></p>
                <p>You can update this Item</p>
                <Button btnType="Danger" >CANCEL</Button>
                <Button btnType="Success" >UPDATE</Button>
            </div>
        )
};

export default ItemDetail;