import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import gadgetPropType from '../../proptypes/gadget';

const GadgetDetails = ({ gadget }) => (
  <div className="gadget-details-container">
    <img src={gadget.image} alt="" />
    <div>
      <strong>{gadget.price}</strong>
    </div>
    <div>
      Category:
      {' '}
      {gadget.category}
    </div>
    <div>
      Body Location:
      {' '}
      {gadget.body_location}
    </div>
    <div>
      Company Name:
      {' '}
      <a href={gadget.company_url} target="_blank" rel="noreferrer">{gadget.company_name}</a>
    </div>
    <div>
      Company Location:
      {' '}
      {gadget.company_mapping_location}
    </div>
  </div>
);

GadgetDetails.propTypes = {
  gadget: gadgetPropType.isRequired,
  location: PropTypes.object,
};

export default GadgetDetails;
