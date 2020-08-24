import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { setSearchString } from '../../redux/actions/search-string-actions';

const mapDispatchToProps = (dispatch) => ({
  setSearchString: (searchString) => dispatch(setSearchString(searchString)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
