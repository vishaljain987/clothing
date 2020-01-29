import React from 'react';
import { connect } from 'react-redux';

import "./CartDropdown.scss";
import CustomButton from "../custombutton/CustomButton";
import CartItem from "../cartitem/CartItem";
import {selectCartItems} from "../../utils/cart.selector";

function CartDropdown({cartItems}) {
    const cartItemComp = cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItemComp}
            </div>
            <CustomButton>Go To Checkout</CustomButton>
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

export default connect(mapStateToProps)(CartDropdown);
