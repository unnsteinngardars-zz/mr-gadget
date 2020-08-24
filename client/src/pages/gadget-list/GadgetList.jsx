import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GadgetListItem from '../../components/gadget-list-item';
import Loader from '../../components/loader';
import Modal from '../../components/modal';
import GadgetDetails from '../../components/gadget-details';
import gadgetPropType from '../../proptypes/gadget';
import FlashNotification from '../../components/flash-notification';
import './styles.css';

const renderLoading = () => (
  <div className="gadget-list-loader"><Loader /></div>
);

const GadgetList = ({ getAllGadgets, gadgets }) => {
  const [detailedGadget, setDetailedGadget] = useState({});
  const [isModalOpen, setModalStatus] = useState(false);
  const [isNotificationOn, setNotification] = useState(false);

  useEffect(() => {
    getAllGadgets();
  }, []);

  function renderGadgets(gadgetsToRender) {
    return (
      <div className="gadget-list">
        {gadgetsToRender.map((gadget) => (
          <GadgetListItem
            onClickDetails={(gadgetToDetail) => {
              setDetailedGadget(gadgetToDetail);
              setModalStatus(true);
            }}
            signalAddedGadget={() => {
              setNotification(true);
            }}
            // eslint-disable-next-line no-underscore-dangle
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

      { isNotificationOn && (
      <FlashNotification
        time={3000}
        onTimeOut={() => {
          setNotification(false);
        }}
      >
        <div>Item successfully added to cart</div>
      </FlashNotification>
      )}
    </div>
  );
};

GadgetList.propTypes = {
  gadgets: PropTypes.arrayOf(gadgetPropType).isRequired,
  getAllGadgets: PropTypes.func.isRequired,
};

export default GadgetList;
