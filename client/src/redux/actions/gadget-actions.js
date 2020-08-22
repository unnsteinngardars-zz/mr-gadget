/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_ALL_GADGETS, ERROR } from '../../constants/redux-constants';

const getAllGadgetsToDispatch = (gadgets) => ({
  type: GET_ALL_GADGETS,
  payload: gadgets,
});

export const getAllGadgets = () => async (dispatch) => {
  try {
    const gadgets = await axios.get('/api/gadgets');
    const { data } = gadgets;
    dispatch(getAllGadgetsToDispatch(data));
  } catch (error) {
    dispatch({ type: ERROR, payload: GET_ALL_GADGETS });
  }
};
