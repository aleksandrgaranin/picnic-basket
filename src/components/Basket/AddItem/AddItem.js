import React, {useState} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import AddItemModal from './AddItemModal/AddItemModal';

import Modal from '../../UI/Modal/Modal'

import classes from './AddItem.module.css';


const AddItem = props => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler=()=>{
        setShowModal(true);
    }

    const closeShowModalHandler=()=>{
        setShowModal(false);
    }


    let modal = null;

    if(showModal){
        modal = <Modal show={showModal} modalClosed={closeShowModalHandler}>
            <AddItemModal/>
        </Modal>
    }

    return (
        <Aux >
            <div className={classes.BuildControls}>
                <button
                onClick = {showModalHandler}
                className = {classes.AddButton}>
                    Add Item
                </button>
                {modal}
            </div>
        </Aux>
    );
};

export default AddItem;

