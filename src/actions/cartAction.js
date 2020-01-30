import {actionType} from "./actionType";

export const toggleCartDropdown = ()=>{
    return{
        type: actionType.TOGGLE_CART_DROPDOWN
    }
}

export const addItem = (item)=>{
    return{
        type:actionType.ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item)=>{
    return{
        type:actionType.REMOVE_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item)=>{
    return{
        type: actionType.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}