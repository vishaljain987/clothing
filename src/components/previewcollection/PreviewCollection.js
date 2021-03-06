import React from 'react';

import "./PreviewCollection.scss";
import CollectionItem from "../collectionitem/CollectionItem";

export default function PreviewCollection({title, items}) {
    const displayItems = items.filter((item, index)=>index<4)
                            .map((item)=><CollectionItem key={item.id} item={item}/>)
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {displayItems}
            </div>
        </div>
    )
}
