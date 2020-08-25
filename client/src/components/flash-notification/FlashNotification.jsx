import React, { useEffect } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const FlashNotification = ({ children, time, onTimeOut }) => {
  useEffect(() => {
    setTimeout(() => {
      onTimeOut();
    }, time);
    return () => clearTimeout(time);
  }, []);
  const animationStyles = {
    animation: `enter-exit ${time}ms ease-in`,
  };
  return (
    <div data-testid="flash-notification" style={animationStyles} className="flash-notification-container">
      <div className="flash-notification-children">
        {children}
      </div>
    </div>
  );
};

FlashNotification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  time: PropTypes.number,
  onTimeOut: PropTypes.func.isRequired,
};

FlashNotification.defaultProps = {
  children: '',
  time: 4000,
};

export default FlashNotification;
