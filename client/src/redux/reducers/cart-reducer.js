import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/redux-constants';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // eslint-disable-next-line no-underscore-dangle
      return !state.some((gadget) => gadget._id === action.payload._id) ? [...state, action.payload] : state;
    case REMOVE_FROM_CART:
      return [...state].filter((gadget) => gadget !== action.payload);
    default:
      return state;
  }
};
