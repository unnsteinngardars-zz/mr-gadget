import { GET_ALL_GADGETS } from '../../constants/redux-constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_GADGETS:
      return action.payload;
    default:
      return state;
  }
};
