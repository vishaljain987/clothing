import {actionType} from "../actions/actionType";
import {addItemToCart} from "../utils/card.util";

const initialState = {
    hidden: true,
    cartItems:[]
}

const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionType.TOGGLE_CART_DROPDOWN :
            return{
                ...state,
                hidden: !state.hidden
            }
        case actionType.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;