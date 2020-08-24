import { combineReducers } from 'redux';
import gadgets from './gadget-reducer';
import cart from './cart-reducer';
import searchString from './search-string-reducer';

export default combineReducers({ gadgets, cart, searchString });
