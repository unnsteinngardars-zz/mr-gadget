import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { renderWithRouter } from 'test-utils';
import Cart from './Cart';

describe('Cart', () => {
  test('should render Cart component', () => {
    renderWithRouter(<Cart />);
  });

  test('should render the shopping_cart material icon', () => {
    const { getByText } = renderWithRouter(<Cart />);
    getByText('shopping_cart');
  });
});
