import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from "../../components/collectionoverview/CollectionOverview";
import CollectionPage from "../collectionpage/CollectionPage";

 function ShopPage({match}){
        
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:category`} component={CollectionPage} />
            </div>
        )
    

}



export default ShopPage;