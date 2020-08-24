/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import gadgetPropType from '../../proptypes/gadget';
import './styles.css';

const getImageStyle = ({ image }) => ({
  background: `center no-repeat url('${image}')`,
});

const GadgetListItem = ({
  gadget, onClickDetails, addToCart, signalAddedGadget,
}) => (
  <div className="gadget-list-item-container">
    <div
      label="gadget list image"
      aria-hidden
      role="button"
      onClick={() => onClickDetails(gadget)}
      style={getImageStyle(gadget)}
      className="gadget-list-item-image"
    />
    <div>
      {gadget.name}
    </div>
    <div>
      <strong>{gadget.price}</strong>
    </div>
    <div className="gadget-list-item-details-add-to-cart">
      <Button onClick={() => onClickDetails(gadget)}>Details</Button>
      <Button onClick={() => {
        addToCart(gadget);
        signalAddedGadget(gadget);
      }}
      >
        Add to cart
      </Button>
    </div>
  </div>
);

GadgetListItem.propTypes = {
  gadget: gadgetPropType.isRequired,
  onClickDetails: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default GadgetListItem;
