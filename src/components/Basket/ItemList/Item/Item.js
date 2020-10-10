import React, {useState} from 'react';
import classes from './Item.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Modal from '../../../UI/Modal/Modal';
import Aux from '../../../../hoc/Aux/Aux';
import Button from '../../../UI/Button/Button';

const Item = (props) => {     
    const [showDetails, setShowDetails] = useState(false)


    const showDetatilsHandler = () => {
        setShowDetails(!showDetails)
    }



    return(
        <Aux >
            <div className={classes.Item} >                
                <ItemDetail 
                    key={props.id}
                    id={props.id}
                    name={props.name}
                    quantity={props.quantity}
                    show = {showDetails}   
                />
                <Button btnType="Success" clicked = {showDetatilsHandler}>{!showDetails ? <p>MORE DETAILS</p> : <p>LESS DETAILS</p>}</Button>      
            </div>
        </Aux >
    );
}


export default Item;