import React from 'react';
import {connect} from 'react-redux';

import "./CheckOut.scss";
import CheckoutItem from "../../components/checkoutitem/CheckoutItem";
import {selectCartTotal, selectCartItems} from "../../utils/cart.selector";

function CheckOut({total, cartItems}) {

    const checkOutItems = cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem} />)

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {checkOutItems}
            <div className='total'>TOTAL: ${total}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        total: selectCartTotal(state),
        cartItems: selectCartItems(state)
    }
    
}

export default connect(mapStateToProps)(CheckOut);
