import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'

import axios from '../../../axios-orders';
import withErrorHendler from '../../../hoc/withErrorHandler/withErrorHandler';


import Item from './Item/Item';
import Spinner from '../../UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

import classes from './ItemList.module.css';


const ItemList = props => {

    const [itemList, setItemList] = useState(null);
 
   
    useEffect(() => { 
        axios.get('/list/item.json?auth=' + props.token)
            .then(res => {             
                const fetchedList = []   
                for(let key in res.data){
                    fetchedList.push({
                        ...res.data[key],
                        id:key
                    });
                }
                setItemList(fetchedList)
                console.log(itemList)
            })
    },[])

    const deletePostHandler =(id)=> {
        axios.delete(`/list/item/${id}.json?auth=` + props.token)
            .then(response => {
                console.log(response)
                const updatedItems = [...itemList]
                updatedItems.splice(id,1);
                setItemList(updatedItems);
        });
    }
    
    
    
    
    let list = <Spinner />;
    if (!props.loading && itemList) {        
        list = itemList.map(item => ( 
            <section className={classes.IngredientList} key={item.id}>
                <ul >  
                    <li>
                        <Item  
                            {...props}                       
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            deletePost={deletePostHandler.bind(this, item.id)}                                   
                        /> 
                    </li>
                </ul>
            </section>
            
            
        ))
    }
    
   
    return (
        <div className={classes.ItemList}>
            <p style={{textAlign:'center'}}>Product List</p>
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
