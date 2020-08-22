import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GadgetListItem from './gadget-list-item';
import './styles.css';

class GadgetList extends Component {
  componentDidMount() {
    const { getAllGadgets } = this.props;
    getAllGadgets();
  }

  renderGadgets() {
    const { gadgets } = this.props;
    return (
      <div className="gadget-list">
        {gadgets.map((gadget) => <GadgetListItem key={gadget._id} gadget={gadget} />)}
      </div>
    );
  }

  // eslint-disable-next-line class-methods-use-this
  renderLoading() {
    return (
      <div>Loading</div>
    );
  }

  render() {
    const { gadgets } = this.props;
    return (
      <div className="gadget-list-container">
        {gadgets.length ? this.renderGadgets() : this.renderLoading()}
      </div>
    );
  }
}

GadgetList.propTypes = {
  gadgets: PropTypes.array,
  getAllGadgets: PropTypes.func,
};

export default GadgetList;
