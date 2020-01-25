import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";

import "./Header.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";

export default function Header(props) {
  const authLink = props.currentUser ? (<div className="option" onClick={()=>auth.signOut()}>
                                          SIGN OUT
                                        </div>) 
                                     : (<Link className="option" to="/signin">SIGN IN</Link>)
    return (
        <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          <Link className='option' to='/shop'>
            CONTACT
          </Link>
          { authLink }
        </div>
      </div>
    )
}
