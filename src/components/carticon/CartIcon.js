import React from 'react';
import { connect } from 'react-redux';

import {ReactComponent as Cart } from "../../assets/cart.svg";
import "./CartIcon.scss";
import {toggleCartDropdown} from "../../actions/cartAction";

function CartIcon(props) {
    return (
        <div className="cart-icon" onClick={props.toggleCartDropdown}>
            <Cart className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch=>{
    return{
        toggleCartDropdown: ()=>dispatch(toggleCartDropdown())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);
