import React from 'react';
import PropTypes from 'prop-types';

const GadgetListItem = ({ gadget }) => (
  <div>{gadget.name}</div>
);

GadgetListItem.propTypes = {
  gadget: PropTypes.object,
};

export default GadgetListItem;
