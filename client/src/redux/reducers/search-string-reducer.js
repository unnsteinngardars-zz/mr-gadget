import { SET_SEARCH_STRING } from '../../constants/redux-constants';

export default (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_STRING: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
