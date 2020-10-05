import React, {useState} from 'react';
import classes from './Item.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Modal from '../../../UI/Modal/Modal';

const Item = (props) => {
   
    const [showItemDetails, setShowItemDetails] = useState(false);

    const showDetailsHandler = () => {
        setShowItemDetails(true);
        };
    
    const closeShowDetailsHandler=()=>{
        setShowItemDetails(false);
    }

    let detailModal = null;

    if(showItemDetails){
        detailModal = <Modal show={showItemDetails} closed={closeShowDetailsHandler} >
            <ItemDetail 
                key={props.id}
                id={props.id}
                name={props.name}
                quantity={props.quantity}                  
                closed={closeShowDetailsHandler}/>
            </Modal>
    }
    return(
    <div className={classes.Item} onClick = {showDetailsHandler} >
        <p>{props.name} Qty: <strong>{props.quantity}</strong></p>
        {detailModal}
    </div>
    );
}


export default Item;