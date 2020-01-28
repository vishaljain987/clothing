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