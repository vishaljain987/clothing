import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";
import shopReducer from "./shopReducer"

const rootReducer = combineReducers({
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
    });


export default rootReducer;