import React from 'react';

import "./CartDropdown.scss";
import CustomButton from "../custombutton/CustomButton";

export default function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}
