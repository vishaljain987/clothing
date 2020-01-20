import React from 'react';
import {withRouter} from 'react-router-dom';

import "./MenuItem.scss";
import { mcall } from 'q';

function MenuItem({title, size, imageUrl, linkUrl, history, match}){
    console.log(match.url);
    return (
        <div className={`menu-item ${size}`} 
            onClick={()=>history.push(`${match.url}${linkUrl}`)} >
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
            </div>
      </div>
    )
}

export default withRouter(MenuItem);