import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

// Basket
import classes from './BasketList.module.css';

import AddItem from '../../components/Basket/AddItem/AddItem';
import ItemList from '../../components/Basket/ItemList/ItemList';

import * as actions from '../../store/actions/index';
import { NavLink } from 'react-router-dom';


const BurgerBuilder = props => {
    return (            
        <Aux> 
            <div className={classes.AddBackground}>
                <NavLink to="/add"                                  
                    className = {classes.AddButton}>
                        Add Item
                </NavLink>
            </div>               
            <ItemList/>                   
        </Aux>
    );   
}


const mapStateToProps = state => {
    return {
        ing: state.bbr.ingredients,
        price: state.bbr.totalPrice,
        error: state.bbr.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));