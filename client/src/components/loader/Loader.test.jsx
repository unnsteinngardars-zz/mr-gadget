import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  test('should render the Loader component', () => {
    render(<Loader />);
  });
});
