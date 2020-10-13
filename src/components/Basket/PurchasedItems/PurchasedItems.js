import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux'

import axios from '../../../axios-orders';
import withErrorHendler from '../../../hoc/withErrorHandler/withErrorHandler';


import Item from '../ItemList/Item/Item';
import Spinner from '../../UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

import classes from './PurchasedItems.module.css';


const PurchasedItems = props => {

    const [itemList, setItemList] = useState(null);
 
   
    useEffect(() => { 
        const queryParams = '?auth=' + props.token + '&orderBy="userId"&equalTo="' + props.userId + '"'
        axios.get('/list.json'+ queryParams)
            .then(res => {             
                const fetchedList = []   
                for(let key in res.data){
                    if(res.data[key].purchased){
                        fetchedList.push({
                            ...res.data[key],
                            id:key
                        });
                    }
                }
                setItemList(fetchedList)
                console.log(itemList)
            })
    },[])

    const deletePostHandler =(id)=> {
        axios.delete(`/list/${id}.json?auth=` + props.token)
            .then(response => {
                console.log(response)
                const updatedItems = [...itemList]
                updatedItems.splice(id,1);
                setItemList(updatedItems);
        });
    }
    
    const purchasedHandler = (identifier) => { 
        let updatedItem = {}
        const updatedItemList = [...itemList]
        for( let id in updatedItemList){
            if (updatedItemList[id].id === identifier){
                updatedItem = {
                    itemData: updatedItemList[id].itemData,
                    purchased: !updatedItemList[id].purchased,
                    userId: updatedItemList[id].userId
                }
            }
        }
        console.log(updatedItem)       
        
        axios.put(`/list/${identifier}.json?auth=` + props.token, updatedItem)
            .then(response => { 
                console.log(response.data)                
            })

        setItemList(updatedItemList);        
        console.log(itemList)
    }
    
    
    let list = <Spinner />;
    if (!props.loading && itemList) {        
        list = itemList.map(item => ( 
            <section className={classes.IngredientList} key={item.id}>
                <ul >  
                    <li>
                        <Item                       
                            key={item.id}
                            id={item.id}
                            name={item.itemData.name}
                            quantity={item.itemData.quantity}
                            price={item.itemData.price}
                            note={item.itemData.note}
                            purchased={item.purchased}
                            deletePost={deletePostHandler.bind(this, item.id)}
                            purchaseItem={purchasedHandler.bind(this, item.id)}                                   
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHendler(PurchasedItems, axios));
