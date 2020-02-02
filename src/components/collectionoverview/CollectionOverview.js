import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import "./CollectionOverview.scss";
import PreviewCollection from "../../components/previewcollection/PreviewCollection";
import {selectShopCollections} from "../../utils/shop.selector"

function CollectionOverview({collections}) {

    const keys = Object.keys(collections);
   
    const collectionItems = keys.map(key=>{
        const {id, ...otherData} = collections[key];
        return <PreviewCollection key={id} {...otherData}/>
    })
 //   const collectionItems = collections.map(({id, ...otherData})=><PreviewCollection key={id} {...otherData}/>)

    return (
        <div className="collections-overview">
            {collectionItems}
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        collections: selectShopCollections
    }
);

export default connect(mapStateToProps)(CollectionOverview);
