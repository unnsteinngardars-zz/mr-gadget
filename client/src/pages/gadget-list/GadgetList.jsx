import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GadgetListItem from './gadget-list-item';
import Loader from '../../components/loader';
import Modal from '../../components/modal';
import GadgetDetails from '../gadget-details';

import './styles.css';

const renderLoading = () => (
  <div className="gadget-list-loader"><Loader /></div>
);

const GadgetList = ({ getAllGadgets, gadgets }) => {
  const [detailedGadget, setGadget] = useState({});
  const [isModalOpen, setModalStatus] = useState(false);
  useEffect(() => {
    getAllGadgets();
  }, []);

  function renderGadgets(gadgets) {
    return (
      <div className="gadget-list">
        {gadgets.map((gadget) => (
          <GadgetListItem
            onClickDetails={(gadgetToDetail) => {
              setGadget(gadgetToDetail);
              setModalStatus(true);
            }}
            key={gadget._id}
            gadget={gadget}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="gadget-list-container">
      {gadgets.length ? renderGadgets(gadgets) : renderLoading()}
      <Modal
        id="gadget-details-modal"
        isOpen={isModalOpen}
        title={detailedGadget.name}
        onClose={() => setModalStatus(false)}
      >
        <GadgetDetails gadget={detailedGadget} />
      </Modal>
    </div>
  );
};

GadgetList.propTypes = {
  gadgets: PropTypes.array,
  getAllGadgets: PropTypes.func,
};

export default GadgetList;
