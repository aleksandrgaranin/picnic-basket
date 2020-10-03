import React, {useState} from 'react';
import Aux from '../../../hoc/Aux/Aux';

import Modal from '../../UI/Modal/Modal'

import classes from './AddItem.module.css';


const AddItem = props => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler=()=>{
        setShowModal(true);
    }

    let modal = null;

    if(showModal){
        modal = <Modal/>
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

