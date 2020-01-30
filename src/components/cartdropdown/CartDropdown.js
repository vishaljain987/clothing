import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import "./CartDropdown.scss";
import CustomButton from "../custombutton/CustomButton";
import CartItem from "../cartitem/CartItem";
import {selectCartItems} from "../../utils/cart.selector";
import {toggleCartDropdown} from "../../actions/cartAction"

function CartDropdown({cartItems, history, dispatch}) {
    const cartItemComp = cartItems.length 
                            ? cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
                            : <span className='empty-message'>Your cart is empty</span>
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItemComp}
            </div>
            <CustomButton onClick={()=>{
                history.push("/checkout");
                dispatch(toggleCartDropdown());
                }}>Go To Checkout</CustomButton>
        </div>
    )
}

/*
const mapStateToProps = state =>{
    return{
        cartItems: state.cart.cartItems
    }
}
*/

const mapStateToProps = state =>{
    return{
        cartItems: selectCartItems(state)
    }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));
