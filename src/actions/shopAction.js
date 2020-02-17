import {actionType} from "../actions/actionType";

export const updateCollection = (collections)=>{
    return{
        type: actionType.UPDATE_COLLECTION,
        payload: collections
    }
}