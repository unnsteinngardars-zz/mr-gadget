import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import { renderWithProvider } from 'test-utils';
import SearchBar from './SearchBar';

const placeholder = 'Type in your search';

describe('SearchBar', () => {
  test('should render the SearchBar component', () => {
    render(<SearchBar setSearchString={() => {}} searchString="" />);
  });

  test(`should have the following placeholder ${placeholder}`, () => {
    const { getByPlaceholderText } = render(<SearchBar setSearchString={() => {}} searchString="" />);
    getByPlaceholderText(placeholder);
  });

  test('should have the searchString prop provided as value', () => {
    const searchString = 'search';
    const {
      getByDisplayValue,
    } = render(<SearchBar setSearchString={() => {}} searchString={searchString} />);
    getByDisplayValue(searchString);
  });

  test('should execute the setSearchString function when the input changes', () => {
    const setSearchString = jest.fn();
    const inputString = 'search';
    render(<SearchBar setSearchString={setSearchString} searchString="" />);

    userEvent.type(screen.getByPlaceholderText(placeholder), inputString);
    expect(setSearchString).toHaveBeenCalledTimes(inputString.length);
  });
});
