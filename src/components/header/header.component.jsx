import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

import { createStructuredSelector } from "reselect";

import './header.styles.scss'
import { ReactComponent as Logo } from "../../assets/box-package-svgrepo-com.svg";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon-component.jsx";
import Cart from "../cart/cart.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";


const Header = ({currentUser, hidden}) => (
   <div className="header">
      <Link to='/' className="logo-container">
         <Logo className="logo"/>
      </Link>
      <div className="options">
         <Link className="option" to="/shop">
            SHOP
         </Link>
         <Link className="option" to="/shop">
            CONTACT
         </Link>
         {
            currentUser ?
            <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
            :
            <Link className="option" to="/signIn">SIGN IN</Link>
         }
         <CartIcon/>
      </div>
      { hidden ? null : <Cart/> }
   </div>
);

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);