/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const renderWithProvider = (ui, options) => {
  const { store } = options;
  const wrapped = <Provider store={store}>{ui}</Provider>;
  return render(wrapped, options);
};

const renderWithRouter = (ui, options) => {
  const wrapped = <Router>{ui}</Router>;
  return render(wrapped, options);
};

const renderWithProviderAndRouter = (ui, options) => {
  const { store } = options;
  const wrapped = <Provider store={store}><Router>{ui}</Router></Provider>;
  return render(wrapped, options);
};

export { renderWithProvider, renderWithRouter, renderWithProviderAndRouter };
