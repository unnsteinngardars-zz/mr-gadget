/* eslint-disable import/prefer-default-export */
import { SET_SEARCH_STRING } from '../../constants/redux-constants';

export const setSearchString = (searchString) => ({
  type: SET_SEARCH_STRING,
  payload: searchString,
});
