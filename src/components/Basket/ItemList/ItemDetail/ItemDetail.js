
import React from 'react';
import Aux from '../../../../hoc/Aux/Aux'
import classes from './ItemDetail.module.css';

import Button from '../../../UI/Button/Button';
import { Link } from 'react-router-dom';



const ItemDetail = props => {   

    let detail = 
        (<div className={classes.ItemDetails}>
            <p style={{color:"blueviolet"}}>{props.name}</p>           
        </div>)    
    let purchased = null;

 
    if(props.purchased){
        purchased = (
            <div>
                <p style={{color:"red", textAlign: "center"}}>PURCHASED</p>
            </div>
        )
    }
    if(props.show){
        detail = (
            <div>
                <div className={classes.ItemDetails}>
                    <p style={{color:"blueviolet"}}>Name: {props.name}</p>            
                    <p>Price: ${props.price}</p>
                    <p>Qty: {props.quantity}</p>
                </div>
                <div className = {classes.ItemDetails}>
                    <p>NOTE: {props.note}</p>
                </div>
                {purchased}
                <hr/>
                <div className = {classes.Buttons}>
                    <Button btnType="Warning" clicked={props.purchaseItem}> PURCHASED </Button>
                    <Button btnType="Success" clicked={props.updateItem} {...props} >
                        Update
                        {/* <Link to="/updateItem/:id" id={props.id} >
                            UPDATE
                        </Link> */}
                    </Button>
                    <Button btnType="Danger" clicked={props.delete}> DELETE </Button>                    
                </div>
                <hr/>
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