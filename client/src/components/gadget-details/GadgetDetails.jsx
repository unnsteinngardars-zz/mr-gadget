import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import gadgetPropType from '../../proptypes/gadget';

const GadgetDetails = ({ gadget }) => (
  <div className="gadget-details-container">
    <div className="gadget-details-inner-container-top">
      <img src={gadget.image} alt={`${gadget.name}`} />
      <div className="gadget-details-price">
        <strong>
          {gadget.price}
        </strong>
      </div>
    </div>
    <div className="gadget-details-inner-container-bottom">
      <div>
        <strong>Category:</strong>
        {' '}
        {gadget.category}
      </div>
      <div>
        <strong>Body Location:</strong>
        {' '}
        {gadget.body_location}
      </div>
      <div>
        <strong>Company Name:</strong>
        {' '}
        <a href={gadget.company_url} target="_blank" rel="noreferrer">{gadget.company_name}</a>
      </div>
      <div>
        <strong>Company Location:</strong>
        {' '}
        {gadget.company_mapping_location}
      </div>
    </div>
  </div>
);

GadgetDetails.propTypes = {
  gadget: gadgetPropType.isRequired,
  location: PropTypes.object,
};

export default GadgetDetails;
