import React, {useState} from 'react';
import classes from './Item.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Modal from '../../../UI/Modal/Modal';
import Aux from '../../../../hoc/Aux/Aux';

const Item = (props) => {     
    const [showDetails, setShowDetails] = useState(false)


    const showDetatilsHandler = () => {
        setShowDetails(!showDetails)
    }



    return(
        <Aux >
            <div className={classes.Item} onClick = {showDetatilsHandler}>
                <ItemDetail {...props}
                    key={props.id}
                    id={props.id}
                    name={props.name}
                    quantity={props.quantity}
                    show = {showDetails}                   
                                     
                />      
            </div>
        </Aux >
    );
}


export default Item;