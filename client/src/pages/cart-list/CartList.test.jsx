import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import { renderWithProvider } from 'test-utils';
import CartList from './CartList';

const store = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {},
};

const cart = [
  {
    name: 'foo',
    _id: '1',
    body_location: 'wrist',
    company_name: 'Nike',
    category: 'Fitness',
    image: 'foo-url',
    company_mapping_location: 'Iceland, Reykjavík',
    price: '$100',
  },
  {
    name: 'bar',
    _id: '2',
    body_location: 'head',
    company_name: 'Adidas',
    category: 'Sport',
    image: 'bar-url',
    company_mapping_location: 'Norway, Oslo',
    price: '$200',
  },
];

describe('CartList', () => {
  test('should render the CartList component', () => {
    render(<CartList cart={[]} />);
  });

  test('should render information about the cart being empty if the cart is empty', () => {
    const { getByText } = render(<CartList cart={[]} />);
    getByText('Your cart is empty');
  });

  test('should render a list of gadgets from the cart along with Details and Remove for each', () => {
    const { getByText, getAllByText } = renderWithProvider(<CartList cart={cart} />, { store });
    getByText(cart[0].name);
    getByText(cart[0].price);
    getByText(cart[1].name);
    getByText(cart[1].price);
    getByText(cart[0].name);
    getAllByText('Details');
    getAllByText('Remove');
  });

  test('should render the modal displaying the additional info for the first gadget when clicking that gadget\'s details button ', () => {
    const clickedGadget = cart[0];
    const { getByTestId, getAllByText, getByText } = renderWithProvider(<CartList cart={cart} />, { store });

    userEvent.click(screen.getAllByText('Details')[0]);

    getByTestId('modal');
    getAllByText(clickedGadget.name);
    getByText(clickedGadget.category);
    getByText(clickedGadget.company_mapping_location);
    getByText(clickedGadget.company_name);
    getAllByText(clickedGadget.price);
  });

  test('should render the flash notification informing with information about the gadget being added when clicking that gadget\'s add button', () => {
    const clickedGadget = cart[0];
    const secondGadget = cart[1];
    const { getByTestId, getByText } = renderWithProvider(<CartList cart={cart} />, { store });

    userEvent.click(screen.getAllByText('Remove')[0]);

    getByTestId('flash-notification');
    getByText(clickedGadget.name);
    getByText(clickedGadget.price);
    getByText(secondGadget.name);
    getByText(secondGadget.price);
    getByText('Item removed from cart');
  });
});
