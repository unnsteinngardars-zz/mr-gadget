import { connect } from 'react-redux';
import CartListItem from './CartListItem';
import { removeFromCart } from '../../redux/actions/cart-actions';

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (gadget) => dispatch(removeFromCart(gadget)),
});
export default connect(null, mapDispatchToProps)(CartListItem);
