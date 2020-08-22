import React from 'react';
import Cart from '../../components/cart';
import Logo from '../../components/logo';
import SearchBar from '../../components/search-bar';
import './styles.css';

const Header = () => (
  <div className="header-container">
    <nav className="header-navigation">
      <Logo />
      <SearchBar />
      <Cart />
    </nav>
  </div>
);

export default Header;
