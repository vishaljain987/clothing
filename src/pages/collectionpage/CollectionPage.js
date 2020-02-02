import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from "../../components/collectionitem/CollectionItem";
import {selectShopCollection} from "../../utils/shop.selector";
import "./CollectionPage.scss";

function Collection({collection, match}) {
    
    const collectionItems = collection.items.map(item=><CollectionItem key={item.id} item={item}/>)
    const { title } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
            {collectionItems}
            </div>
      </div>
    )
}

const mapStateToProps = (state, ownProps)=>{
    
    return{
        collection: selectShopCollection(ownProps.match.params.category)(state)
    }
}
export default connect(mapStateToProps)(Collection);