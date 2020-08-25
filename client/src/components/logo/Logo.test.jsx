import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { renderWithRouter } from 'test-utils';
import Logo from './Logo';

describe('Logo', () => {
  test('should render the Logo component', () => {
    renderWithRouter(<Logo />);
  });

  test('should render the logo text', () => {
    const { getByText } = renderWithRouter(<Logo />);
    getByText('Mr Gadget');
  });
});
