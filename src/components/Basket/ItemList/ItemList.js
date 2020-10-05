import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'

import axios from '../../../axios-orders';
import withErrorHendler from '../../../hoc/withErrorHandler/withErrorHandler';

import Item from './Item/Item';
import Spinner from '../../UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

import classes from './ItemList.module.css';


const ItemList = props => {

    const [itemList, setItemList] = useState(null)

   
    useEffect(() => { 
        axios.get('/list/item.json')
            .then(res => {             
                const fetchedList = []   
                for(let key in res.data){
                    fetchedList.push({
                        ...res.data[key],
                        id:key
                    });
                }
                setItemList(fetchedList)
            })
        console.log(itemList)
    },[])

    const removeFromList = itemId => {
        setItemList(prevItem => prevItem.filter(item => item.id !== itemId))
        console.log(itemId)
    }

    let list = <Spinner />;
    if (!props.loading && itemList) {        
        list = itemList.map(item => ( 
            <section className={classes.IngredientList}>
                <ul>  
                    <li key={item.id} onClick={removeFromList.bind(this, item.id)}>
                        <Item                         
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            onClick = {removeFromList.bind(item.id)}                           
                        />    
                    </li>
                </ul>
            </section>
            
            
        ))
    }
    
   
    return (
        <div className={classes.ItemList}>
            {list}
        </div>
    );
};

const mapStateToProps = state => {
    return{
        // orders: state.ordr.orders,
        loading: state.ordr.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrder: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHendler(ItemList, axios));
