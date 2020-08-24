import React, { useEffect } from 'react';
import './styles.css';

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
    <div style={animationStyles} className="flash-notification-container">
      <div className="flash-notification-children">
        {children}
      </div>
    </div>
  );
};

export default FlashNotification;
