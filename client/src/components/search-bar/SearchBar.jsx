import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const SearchBar = ({ setSearchString }) => (
  <div className="search-bar-container">
    <span>
      <input
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        className="search-bar-input"
        type="text"
        placeholder="Type in your search"
      />
    </span>
    <span
      className="search-bar-icon material-icons"
    >
      search

    </span>
  </div>
);

SearchBar.propTypes = {
  setSearchString: PropTypes.func.isRequired,
};

export default SearchBar;
