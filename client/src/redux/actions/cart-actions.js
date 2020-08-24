import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/redux-constants';

export const addToCart = (gadget) => ({
  type: ADD_TO_CART,
  payload: gadget,
});

export const removeFromCart = (gadget) => ({
  type: REMOVE_FROM_CART,
  payload: gadget,
});
