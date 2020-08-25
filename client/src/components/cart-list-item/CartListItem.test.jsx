import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartListItem from './CartListItem';

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

describe('CartListItem', () => {
  test('should render CartListItem component', () => {
    const { getByText } = render(<CartListItem gadget={gadget} onClickDetails={() => {}} removeFromCart={() => {}} signalDeletedGadget={() => {}} />);
    getByText(gadget.name);
    getByText(gadget.price);
    getByText('Details');
    getByText('Remove');
  });

  test('should execute the onClickDetails callback when clicked on details', () => {
    const onClickDetails = jest.fn();
    render(<CartListItem gadget={gadget} onClickDetails={onClickDetails} removeFromCart={() => {}} signalDeletedGadget={() => {}} />);

    userEvent.click(screen.getByText('Details'));

    expect(onClickDetails).toHaveBeenCalled();
  });

  test('should execute the signalDeletedGadget callback and removeFromCart function when clicked on Remove', () => {
    const removeFromCart = jest.fn();
    const signalDeletedGadget = jest.fn();
    render(<CartListItem gadget={gadget} onClickDetails={() => {}} removeFromCart={removeFromCart} signalDeletedGadget={signalDeletedGadget} />);

    userEvent.click(screen.getByText('Remove'));

    expect(removeFromCart).toHaveBeenCalled();
    expect(signalDeletedGadget).toHaveBeenCalled();
  });
});
