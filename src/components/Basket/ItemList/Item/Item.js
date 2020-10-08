import React, {useState} from 'react';
import classes from './Item.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Modal from '../../../UI/Modal/Modal';
import Aux from '../../../../hoc/Aux/Aux';

const Item = (props) => {
   
    const [showItemDetails, setShowItemDetails] = useState(false);

    const showDetailsHandler = () => {
        setShowItemDetails(true);
    };
    
    const closeShowModalHandler = (showItemDetails) =>{
        setShowItemDetails(!showItemDetails);
    }


    let detailModal = null;

    if(showItemDetails){
        detailModal = <Modal show={showItemDetails} closed={closeShowModalHandler} >
            <ItemDetail {...props}
                key={props.id}
                id={props.id}
                name={props.name}
                quantity={props.quantity}                  
                closed={closeShowModalHandler}/>
            </Modal>
    }
    return(
        <Aux >
            <div className={classes.Item} onClick = {showDetailsHandler} >
                <p>{props.name} Qty: <strong>{props.quantity}</strong></p>
                {detailModal}
            </div>
        </Aux >
    );
}


export default Item;