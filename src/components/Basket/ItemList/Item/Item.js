import React from 'react';
import classes from './Item.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Modal from '../../../UI/Modal/Modal';

const item = (props) => {
    console.log(props)

    let detailModal = null;

    if(props.showDetails){
        detailModal = <Modal show={props.showDetails} closed={props.closed} >
            <ItemDetail 
                key={props.id}
                id={props.id}
                name={props.name}
                quantity={props.quantity}  />
            </Modal>
    }
    return(
    <div className={classes.Item}>
        <p>{props.name} Qty: <strong>{props.quantity}</strong></p>
        {detailModal}
    </div>
    );
}


export default item;