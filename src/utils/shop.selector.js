import {createSelector} from 'reselect';


//input selector
const selectShop = state=>state.shop;

//output selector
export const selectShopCollections = createSelector(
    [selectShop],
    shop=>shop.collections ? shop.collections : []
)

//output selector
export const selectShopCollection = collectionUrlParam =>{
    console.log('--------collectionUrlParam--------'+collectionUrlParam);
    return createSelector(
        [selectShopCollections],
        collections=>(collections ? collections[collectionUrlParam] : null)
    )
}
