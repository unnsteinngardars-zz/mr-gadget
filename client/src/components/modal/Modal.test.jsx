import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal', () => {
  test('should render Modal component', () => {
    render(<Modal isOpen={false} onClose={() => {}} id="test-modal-id" />);
  });

  test('should render modal container if modal is open', () => {
    const { getByTestId } = render(<Modal isOpen onClose={() => {}} id="test-modal-id" />);
    getByTestId('modal');
  });

  test('should render children inside modal', () => {
    const children = 'children';
    const { getByText } = render(<Modal isOpen onClose={() => {}} id="test-modal-id">{children}</Modal>);
    getByText(children);
  });

  test('should render the modal title if provided', () => {
    const modalTitle = 'modalTitle';
    const { getByText } = render(<Modal isOpen onClose={() => {}} id="test-modal-id" title={modalTitle} />);
    getByText(modalTitle);
  });

  test('should execute the onClose callback when the close icon is clicked', () => {
    const onClose = jest.fn();
    render(<Modal isOpen onClose={onClose} id="test-modal-id" />);

    userEvent.click(screen.getByText('close'));

    expect(onClose).toHaveBeenCalled();
  });

  test('should execute the onClose callback when the close icon is pressed by the enter key', () => {
    const onClose = jest.fn();
    const { getByText } = render(<Modal isOpen onClose={onClose} id="test-modal-id" />);
    const closeIcon = getByText('close');
    userEvent.tab();
    expect(closeIcon).toHaveFocus();
    fireEvent.keyPress(closeIcon, { key: 'Enter', code: '13', charCode: '13' });
    expect(onClose).toHaveBeenCalled();
  });
});
