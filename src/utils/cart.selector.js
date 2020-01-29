import {createSelector} from 'reselect';

//input selector
const selectCart = state=>state.cart;

//output selector
export const selectCartItems = createSelector(
    [selectCart],
    cart=>cart.cartItems
);

//output selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((acc, cartItem)=>acc=acc+cartItem.quantity ,0)
);