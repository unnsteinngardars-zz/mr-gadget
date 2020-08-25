import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { renderWithRouter, renderWithProviderAndRouter } from 'test-utils';
import Header from './Header';

const store = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ searchString: '' }),
};

const rootLocation = { pathname: '/' };
const nonRootLocation = { pathname: '/non-root' };

describe('Header', () => {
  test('should render the Header component', () => {
    renderWithRouter(<Header location={nonRootLocation} />);
  });

  test('should render the logo text when the location is the root', () => {
    const {
      getByText,
      getByTestId,
    } = renderWithProviderAndRouter(<Header location={nonRootLocation} />, { store });
    getByText('Mr Gadget');
    getByTestId('logo');
  });

  test('should render the logo text when the location is not the root', () => {
    const {
      getByText,
      getByTestId,
    } = renderWithProviderAndRouter(<Header location={nonRootLocation} />, { store });
    getByText('Mr Gadget');
    getByTestId('logo');
  });

  test('should render the search bar when the location is the root', () => {
    const {
      getByTestId,
    } = renderWithProviderAndRouter(<Header location={rootLocation} />, { store });
    getByTestId('search-bar');
  });

  test('should render the icon cart when the location is the root', () => {
    const {
      getByTestId,
    } = renderWithProviderAndRouter(<Header location={rootLocation} />, { store });
    getByTestId('cart');
  });

  test('should render the icon cart when the location is not the root', () => {
    const {
      getByTestId,
    } = renderWithProviderAndRouter(<Header location={nonRootLocation} />, { store });
    getByTestId('cart');
  });
});
