import React, {useState} from 'react';
import Aux from '../../../../hoc/Aux/Aux'

import Button from '../../../UI/Button/Button';


const ItemDetail = props => {   

    let detail = 
        (<div>
            <p>Product name: {props.name}</p> 
            <p><strong>Quantity: {props.quantity}</strong></p>
        </div>)

    if(props.show){
        detail = (<div>
                <p>Product name: {props.name}</p>            
                <p><strong>Quantity: {props.quantity}</strong></p>
                <p><strong>Price: ...</strong></p>
                <p>You can update this Item</p>
                <Button btnType="Danger" onClick={props.close}>PURCHASED</Button>
                <Button btnType="Success" >UPDATE</Button>
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