import React, {useEffect} from 'react';
import { connect } from 'react-redux'

import axios from '../../../axios-orders';
import withErrorHendler from '../../../hoc/withErrorHandler/withErrorHandler';

import Item from './Item/Item';
import Spinner from '../../UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';

import classes from './ItemList.module.css';


const ItemList = props => {
    const { onFetchOrder } = props;
    useEffect(() => {
        onFetchOrder(props.token, props.userId);
    }, [onFetchOrder])

    let itemList = <Spinner />;
    if (!props.loading) {
        itemList = props.orders.map(item => (
            <Item                         
                key={item.id}
                ingredients={item.ingredients}
                price={item.price} />
        ))
    }
    return (
        <div>
            {itemList}
        </div>
    );
};

const mapStateToProps = state => {
    return{
        orders: state.ordr.orders,
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
