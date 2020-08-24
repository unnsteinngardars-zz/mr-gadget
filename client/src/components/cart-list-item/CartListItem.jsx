import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Button from '../button';
import gadgetPropType from '../../proptypes/gadget';

const CartListItem = ({
  gadget, onClickDetails, removeFromCart, signalDeletedGadget,
}) => (
  <div className="cart-list-item-container">
    <img className="cart-list-item-image" src={gadget.image} alt="Not found" />
    <div className="cart-list-item-child cart-list-item-name">
      <span>
        {gadget.name}
      </span>
    </div>
    <div className="cart-list-item-child cart-list-item-price">
      <span>
        {gadget.price}
      </span>
    </div>
    <div className="cart-list-item-child">
      <Button onClick={() => onClickDetails(gadget)}>Details</Button>
    </div>
    <div className="cart-list-item-child">
      <Button onClick={() => {
        removeFromCart(gadget);
        signalDeletedGadget();
      }}
      >
        Remove
      </Button>
    </div>
  </div>
);

CartListItem.propTypes = {
  gadget: gadgetPropType.isRequired,
  onClickDetails: PropTypes.func.isRequired,
};

export default CartListItem;
