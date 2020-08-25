import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const SearchBar = ({ searchString, setSearchString }) => (
  <div data-testid="search-bar" className="search-bar-container">
    <span>
      <input
        value={searchString}
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
  searchString: PropTypes.string.isRequired,
};

export default SearchBar;
