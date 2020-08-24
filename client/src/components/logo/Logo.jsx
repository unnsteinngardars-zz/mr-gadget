import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Logo = () => (
  <div className="logo-container">
    <Link className="logo-link" to="/">
      <div className="logo-text">Mr Gadget</div>
    </Link>
  </div>
);

export default Logo;
