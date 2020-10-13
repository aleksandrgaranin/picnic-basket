import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

// Basket

import AddItem from '../../components/Basket/AddItem/AddItem';
import ItemList from '../../components/Basket/ItemList/ItemList';

import * as actions from '../../store/actions/index';


const BurgerBuilder = props => {
    return (            
        <Aux>                
            {/* <AddItem />                 */}
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