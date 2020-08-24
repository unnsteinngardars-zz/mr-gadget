import React from 'react';
import Cart from '../../components/cart';
import Logo from '../../components/logo';
import SearchBar from '../../components/search-bar';
import './styles.css';

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { location: { pathname } } = props;
  return (
    <nav className="header-container">
      <Logo />
      {pathname === '/' ? <SearchBar /> : null}
      <Cart />
    </nav>
  );
};
export default Header;
