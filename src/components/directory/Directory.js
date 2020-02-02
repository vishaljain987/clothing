import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import "./Directory.scss";
import MenuItem from "../menuitem/MenuItem";
import {selectDirectorySections} from "../../utils/directory.selector"

function Directory({ sections }){
    
        const menuitems = sections.map((section)=>(<MenuItem 
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
