import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound', () => {
  test('should render the NotFound component', () => {
    render(<NotFound />);
  });

  test('should render 404 Page Not Found', () => {
    const { getByText } = render(<NotFound />);
    getByText('404');
    getByText('Page Not Found');
  });
});
