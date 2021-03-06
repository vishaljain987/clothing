import React from 'react';

import "./CartItem.scss"

export default function CartItem({ item: { imageUrl, price, name, quantity } }) {
    return (
        <div>
            <div className='cart-item'>
                <img src={imageUrl} alt='item' />
                <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
                </div>
            </div>
        </div>
    )
}
