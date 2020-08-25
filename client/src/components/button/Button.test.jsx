import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  test('should render Button component', () => {
    render(<Button onClick={() => {}} />);
  });

  test('should render button text', () => {
    const buttonText = 'Text';
    const { getByText } = render(<Button onClick={() => {}}>{buttonText}</Button>);
    getByText(buttonText);
  });

  test('should execute onClick callback when button is clicked', () => {
    const onClick = jest.fn();
    const buttonText = 'Text';
    render(<Button onClick={onClick}>{buttonText}</Button>);

    userEvent.click(screen.getByText(buttonText));

    expect(onClick).toHaveBeenCalled();
  });
});
