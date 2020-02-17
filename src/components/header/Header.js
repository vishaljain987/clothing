import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../carticon/CartIcon";
import CartDropdown from "../cartdropdown/CartDropdown"
import "./Header.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./Header.styles";

function Header(props) {
  const authLink = props.currentUser ? (<OptionLink as div onClick={()=>auth.signOut()}>
                                          SIGN OUT
                                        </OptionLink>) 
                                     : (<Link className="option" to="/signin">SIGN IN</Link>)
    return (
        <HeaderContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/shop'>
            SHOP
          </OptionLink>
          <OptionLink to='/shop'>
            CONTACT
          </OptionLink>
          { authLink }
          <CartIcon />
        </OptionsContainer>
        {props.hidden ? null : <CartDropdown />}
      </HeaderContainer>
    )
}
const mapStateToProps = (state)=>({currentUser: state.user.currentUser,
                                   hidden: state.cart.hidden})
export default connect(mapStateToProps)(Header);
