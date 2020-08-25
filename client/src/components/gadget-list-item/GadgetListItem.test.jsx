import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GadgetListItem from './GadgetListItem';

const gadget = {
  name: 'foo',
  _id: '1',
  body_location: 'wrist',
  company_name: 'Nike',
  category: 'Fitness',
  image: 'foo-url',
  company_mapping_location: 'Iceland, Reykjavík',
  price: '$100',
};

describe('GadgetListItem', () => {
  test('should render the GadgetListItem component', () => {
    render(<GadgetListItem gadget={gadget} onClickDetails={() => {}} addToCart={() => {}} signalAddedGadget={() => {}} />);
  });

  test('should render a single gadget list item', () => {
    const { getByText, getByAltText } = render(<GadgetListItem gadget={gadget} onClickDetails={() => {}} addToCart={() => {}} signalAddedGadget={() => {}} />);
    getByText(gadget.name);
    getByText(gadget.price);
    getByText('Details');
    getByText('Add to cart');
    getByAltText(`${gadget.name}`);
  });

  test('should execute the onClickDetails callback when clicked on details', () => {
    const onClickDetails = jest.fn();
    render(<GadgetListItem gadget={gadget} onClickDetails={onClickDetails} addToCart={() => {}} signalAddedGadget={() => {}} />);

    userEvent.click(screen.getByText('Details'));

    expect(onClickDetails).toHaveBeenCalled();
  });

  test('should execute the onClickDetails callback when clicked on the image', () => {
    const onClickDetails = jest.fn();
    render(<GadgetListItem gadget={gadget} onClickDetails={onClickDetails} addToCart={() => {}} signalAddedGadget={() => {}} />);

    userEvent.click(screen.getByAltText(`${gadget.name}`));

    expect(onClickDetails).toHaveBeenCalled();
  });

  test('should execute the signalAddedGadget callback when clicked on Add to cart', () => {
    const signalAddedGadget = jest.fn();
    render(<GadgetListItem gadget={gadget} onClickDetails={() => {}} addToCart={() => {}} signalAddedGadget={signalAddedGadget} />);

    userEvent.click(screen.getByText('Add to cart'));

    expect(signalAddedGadget).toHaveBeenCalled();
  });
});
