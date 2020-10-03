import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

import classes from './AddItem.module.css';


const AddItem = props => {
    return (
        <Aux >
            <div className={classes.BuildControls}>
                <batton
                className = {classes.AddButton}>
                    Add Item
                </batton>
            </div>
        </Aux>
    );
};

export default AddItem;

