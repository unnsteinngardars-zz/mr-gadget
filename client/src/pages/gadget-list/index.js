import { connect } from 'react-redux';
import GadgetList from './GadgetList'
import { getAllGadgets } from '../../redux/actions/gadget-actions';

const mapDispatchToProps = dispatch => {
  return {
    getAllGadgets: () => dispatch(getAllGadgets())
  }
}

const mapStateToProps = ({gadgets}) => ({gadgets})

export default connect(mapStateToProps, mapDispatchToProps)(GadgetList);