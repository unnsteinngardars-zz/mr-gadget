import { connect } from 'react-redux';
import GadgetListItem from './GadgetListItem';
import { addToCart } from '../../redux/actions/cart-actions';

const mapDispatchToProps = (dispatch) => ({
  addToCart: (gadget) => dispatch(addToCart(gadget)),
});

export default connect(null, mapDispatchToProps)(GadgetListItem);
