import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Cart = () => (
  <div data-testid="cart" className="cart-container">
    <div className="cart-icon-container">
      <Link to="/cart">
        <i className="cart-icon material-icons">shopping_cart</i>
      </Link>
    </div>
  </div>
);

export default Cart;
