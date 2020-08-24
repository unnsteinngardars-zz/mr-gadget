import { connect } from 'react-redux';
import GadgetList from './GadgetList';
import { getAllGadgets } from '../../redux/actions/gadget-actions';

const mapDispatchToProps = (dispatch) => ({
  getAllGadgets: () => dispatch(getAllGadgets()),
});

const mapStateToProps = ({ gadgets, searchString }) => {
  const filteredGadgets = searchString.length
    ? gadgets.filter((gadget) => gadget.name.toLowerCase().includes(searchString.toLowerCase()))
    : gadgets;
  return {
    gadgets: filteredGadgets,
    searchString,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GadgetList);
