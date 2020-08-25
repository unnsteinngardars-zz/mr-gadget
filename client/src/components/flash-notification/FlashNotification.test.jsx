import React from 'react';
import { render } from '@testing-library/react';
import FlashNotification from './FlashNotification';

describe('FlashNotification', () => {
  test('should render the FlashNotification component', () => {
    render(<FlashNotification onTimeOut={() => {}} />);
  });

  test('should render the FlashNotification with children', () => {
    const children = 'children';
    const { getByText } = render(<FlashNotification onTimeOut={() => {}}>{children}</FlashNotification>);
    getByText(children);
  });

  test('should execute the onTimeOut callback when the time is out', () => {
    jest.useFakeTimers();
    const children = 'children';
    const onTimeOut = jest.fn();

    render(<FlashNotification onTimeOut={onTimeOut}>{children}</FlashNotification>);
    jest.runAllTimers();

    expect(onTimeOut).toHaveBeenCalled();
  });
});
