import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <div className="button-container">
    <button type="button" onClick={() => onClick()}>
      {children}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: '',
};

export default Button;
