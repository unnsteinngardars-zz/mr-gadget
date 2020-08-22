import React from 'react';
import './styles.css';

const SearchBar = () => (
  <div className="search-bar-container">
    <span>
      <input className="search-bar-input" type="text" placeholder="Type in your search" />
    </span>
    <span className="search-bar-icon material-icons">search</span>
  </div>
);

export default SearchBar;
