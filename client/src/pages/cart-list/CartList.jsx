import React, { useState } from 'react';
import CartListItem from '../../components/cart-list-item';
import Modal from '../../components/modal';
import GadgetDetails from '../../components/gadget-details';
import FlashNotification from '../../components/flash-notification';
import './styles.css';

const CartList = ({ cart }) => {
  const [detailedGadget, setDetailedGadget] = useState({});
  const [isModalOpen, setModalStatus] = useState(false);
  const [isNotificationOn, setNotification] = useState(false);

  function renderCartItems(cart) {
    return (
      <div className="cart-list-container">
        <div className="cart-list">
          {cart.map((gadget) => (
            <CartListItem
              key={gadget._id}
              gadget={gadget}
              onClickDetails={(gadgetToDetail) => {
                setDetailedGadget(gadgetToDetail);
                setModalStatus(true);
              }}
              signalDeletedGadget={() => {
                setNotification(true);
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  function renderEmptyCart() {
    return <div className="cart-list-empty"><h1>Your cart is empty</h1></div>;
  }

  return (
    <div>
      {cart.length ? renderCartItems(cart) : renderEmptyCart()}
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
        <div>Item removed from cart</div>
      </FlashNotification>
      )}
    </div>
  );
};

export default CartList;
