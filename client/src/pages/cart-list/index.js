import { connect } from 'react-redux';
import CartList from './CartList';

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(CartList);
