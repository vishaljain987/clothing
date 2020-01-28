export const addItemToCart = (cartItems, itemToAdd)=>{
    
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
    if(existingItem){
        return cartItems.map(cartItem=>cartItem.id===existingItem.id ? {...cartItem, quantity:cartItem.quantity+1} : cartItem)
    }else{
        return [...cartItems, {...itemToAdd, quantity:1}]
    }
}