import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <div className="button-container">
    <button type="button">
      {children}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Button.defaultProps = {
  children: '',
};

export default Button;
