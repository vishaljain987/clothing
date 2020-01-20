import React, { Component } from 'react';

import "./Directory.scss";
import MenuItem from "../menuitem/MenuItem";

export default class Directory extends Component {

    state={
        sections:[
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
    }


    render() {

        const menuitems = this.state.sections.map((section)=>(<MenuItem 
        key={section.id} 
        title={section.title} 
        size={section.size} 
        imageUrl={section.imageUrl} 
        linkUrl={section.linkUrl}
        />))

        return (
            <div className="directory-menu">
                {menuitems}
            </div>
        )
    }
}
