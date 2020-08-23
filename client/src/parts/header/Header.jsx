import React from 'react';
import Cart from '../../components/cart';
import Logo from '../../components/logo';
import SearchBar from '../../components/search-bar';
import './styles.css';

const Header = () => (
  <nav className="header-container">
    <Logo />
    <SearchBar />
    <Cart />
  </nav>
);

export default Header;
