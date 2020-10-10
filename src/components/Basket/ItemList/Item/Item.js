import React, {useState} from 'react';
import classes from './Item.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Aux from '../../../../hoc/Aux/Aux';
import Button from '../../../UI/Button/Button';
import axios from '../../../../axios-orders';

import { connect } from 'react-redux'
import withErrorHendler from '../../../../hoc/withErrorHandler/withErrorHandler';

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
                    {...props}
                    show = {showDetails}
                    delete = {props.deletePost}   
                />
                <Button btnType="Success" clicked = {showDetatilsHandler}>{!showDetails ? <p>MORE DETAILS</p> : <p>LESS DETAILS</p>}</Button>      
            </div>
        </Aux >
    );
}


const mapStateToProps = state => {
    return{
        // orders: state.ordr.orders,
        loading: state.ordr.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, null)(withErrorHendler(Item, axios));


