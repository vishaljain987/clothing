import React from 'react'
import { connect } from 'react-redux';

import "./CollectionItem.scss";
import CustomButton from "../custombutton/CustomButton";
import {addItem} from "../../actions/cartAction";

function CollectionItem({item, addItem}) {
    const {name, imageUrl, price} = item;
    return (
        <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={()=>addItem(item)}>Add To Cart</CustomButton>
    </div>
    )
}

const mapDispatchToProps = dispatch =>{
  return{
    addItem: (item)=>dispatch(addItem(item))
  }
}
export default connect(null, mapDispatchToProps)(CollectionItem);