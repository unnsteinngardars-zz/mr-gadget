import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Modal = ({
  isOpen, children, onClose, title, id,
}) => {
  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      const {
        srcElement: { id: targetId },
      } = e;
      if (targetId === id) onClose();
    };
    const modal = document.getElementById(id);
    if (modal) modal.addEventListener('click', closeOnOutsideClick);
    return () => {
      if (modal) modal.removeEventListener('click', closeOnOutsideClick);
    };
  });

  return isOpen ? (
    <div data-testid="modal" id={id} className="modal-container">
      <div className="modal-content">
        <div className="modal-title-bar">
          <span className="modal-title">{title}</span>
          <span
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                onClose();
              }
            }}
            tabIndex={0}
            role="button"
            onClick={onClose}
            className="modal-close-icon material-icons"
          >
            close
          </span>
        </div>
        <div className="modal-children">
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  children: null,
  title: 'Title',
};

export default Modal;
