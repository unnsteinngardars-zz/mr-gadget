/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../../components/button';
import './styles.css';

const getImageStyle = ({ image }) => ({
  background: `center no-repeat url('${image}')`,
});

const GadgetListItem = ({ gadget }) => (
  <div className="gadget-list-item-container">
    <div style={getImageStyle(gadget)} className="gadget-list-item-image" />
    <div>
      {gadget.name}
    </div>
    <div>
      <strong>{gadget.price}</strong>
    </div>
    <div className="gadget-list-item-details-add-to-cart">
      <Link className="gadget-list-item-details-link" to={`/gadgets/${gadget._id}`}><strong>Details</strong></Link>
      <Button>Add to cart</Button>
    </div>
  </div>
);

GadgetListItem.propTypes = {
  gadget: PropTypes.object,
};

export default GadgetListItem;
