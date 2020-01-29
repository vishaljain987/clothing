import React from 'react';
import { connect } from 'react-redux';

import {ReactComponent as Cart } from "../../assets/cart.svg";
import "./CartIcon.scss";
import {toggleCartDropdown} from "../../actions/cartAction";
import {selectCartItemsCount} from "../../utils/cart.selector";

function CartIcon(props) {
   
    return (
        <div className="cart-icon" onClick={props.toggleCartDropdown}>
            <Cart className="shopping-icon" />
            <span className="item-count">{props.itemCount}</span>
        </div>
    )
}
/*
const mapStateToProps = ({cart:{cartItems}}) =>{
    return {itemCount: cartItems.reduce((acc, cartItem)=>acc=acc+cartItem.quantity ,0)}
}
*/

const mapStateToProps = (state) =>{
    return {itemCount: selectCartItemsCount(state)}
}

const mapDispatchToProps = dispatch=>{
    return{
        toggleCartDropdown: ()=>dispatch(toggleCartDropdown())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
