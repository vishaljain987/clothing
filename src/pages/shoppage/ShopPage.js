import React, { Component } from 'react';

import {SHOP_DATA} from "./shop.data";
import PreviewCollection from "../../components/previewcollection/PreviewCollection";

export default class ShopPage extends Component {

    state = {
        collections: SHOP_DATA
    }

    render() {
        const collectionItems = this.state.collections.map(({id, ...otherData})=><PreviewCollection key={id} {...otherData}/>)
        return (
            <div>
                {collectionItems}
            </div>
        )
    }
}
