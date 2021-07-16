import React, { useContext } from 'react';
import './Navbar.css';
import img from '../../assets/images/logo.png';

import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

import Cart from '../Cart/Cart';

import { Link } from 'react-router-dom';

import CartContext from '../Context/Cart/cartContext';

function Navbar() {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="navbar_left">
        <img src={img} alt="" />
      </div>

      <div className="navbar_middle">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h3 className="icon">Home</h3>
        </Link>

        <Link to="/products" style={{ textDecoration: 'none' }}>
          <h3 className="icon">Shop</h3>
        </Link>
        <h3 className="icon">About</h3>
        <h3 className="icon">Contact</h3>
      </div>

      <div className="navbar_right">
        <SearchSharpIcon className="materialIcon" />
        <Link to="/form" className="form-icon" style={{ marginRight: 30 }}>
          <PersonSharpIcon className="materialIcon" />
        </Link>

        {cartItems.length > 0 && (
          <span className="item-count">{cartItems.length}</span>
        )}
        <ShoppingCartSharpIcon
          className="materialIcon"
          onClick={showHideCart}
        />
      </div>
      <Cart />
    </div>
  );
}

export default Navbar;
