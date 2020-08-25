import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import { renderWithProvider } from 'test-utils';
import GadgetList from './GadgetList';

const store = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {},
};

const gadgets = [
  {
    name: 'foo',
    _id: '1',
    body_location: 'wrist',
    company_name: 'Nike',
    category: 'Fitness',
    image: 'foo-url',
    company_mapping_location: 'Iceland, Reykjavík',
    price: '$100',
  },
  {
    name: 'bar',
    _id: '2',
    body_location: 'head',
    company_name: 'Adidas',
    category: 'Sport',
    image: 'bar-url',
    company_mapping_location: 'Norway, Oslo',
    price: '$200',
  },
];

describe('GadgetList', () => {
  test('should render the GadgetList component', () => {
    render(<GadgetList gadgets={[]} getAllGadgets={() => {}} searchString="" />);
  });

  test('should render Gadget list when gadgets is a non empty array and display image, name and price for each gadget along with details and add buttons', () => {
    const {
      getByTestId, getAllByTestId, getByText, getByAltText, getAllByText,
    } = renderWithProvider(<GadgetList gadgets={gadgets} getAllGadgets={() => {}} searchString="" />, { store });
    getByTestId('gadget-list');
    getAllByTestId('gadget-list-item');
    getByText('foo');
    getByText('$100');
    getByText('bar');
    getByText('$200');
    getByAltText(`${gadgets[0].name}`);
    getByAltText(`${gadgets[1].name}`);
    getAllByText('Details');
    getAllByText('Add to cart');
  });

  test('should render Loader when gadgets is empty', () => {
    const { getByTestId } = render(<GadgetList gadgets={[]} getAllGadgets={() => {}} searchString="" />);
    getByTestId('loader');
  });

  test('should render no results found when gadget is empty and search string is not the empty string', () => {
    const searchText = 'foo';
    const { getByText } = renderWithProvider(<GadgetList gadgets={[]} getAllGadgets={() => {}} searchString={searchText} />, { store });
    getByText('No results for');
    getByText(searchText);
  });

  test('should render the modal displaying the additional info for the first gadget when clicking that gadget\'s details button ', () => {
    const clickedGadget = gadgets[0];
    const { getByTestId, getAllByText, getByText } = renderWithProvider(<GadgetList gadgets={gadgets} getAllGadgets={() => {}} searchString="" />, { store });

    userEvent.click(screen.getAllByText('Details')[0]);

    getByTestId('modal');
    getAllByText(clickedGadget.name);
    getByText(clickedGadget.category);
    getByText(clickedGadget.company_mapping_location);
    getByText(clickedGadget.company_name);
    getAllByText(clickedGadget.price);
  });

  test('should render the modal displaying the additional info for the first gadget when clicking that gadget\'s photo ', () => {
    const clickedGadget = gadgets[0];
    const { getByTestId, getAllByText, getByText } = renderWithProvider(<GadgetList gadgets={gadgets} getAllGadgets={() => {}} searchString="" />, { store });

    userEvent.click(screen.getByAltText(`${clickedGadget.name}`));

    getByTestId('modal');
    getAllByText(clickedGadget.name);
    getByText(clickedGadget.category);
    getByText(clickedGadget.company_mapping_location);
    getByText(clickedGadget.company_name);
    getAllByText(clickedGadget.price);
  });

  test('should render the flash notification informing with information about the gadget being added when clicking that gadget\'s add button', () => {
    const clickedGadget = gadgets[0];
    const secondGadget = gadgets[1];
    const { getByTestId, getByText } = renderWithProvider(<GadgetList gadgets={gadgets} getAllGadgets={() => {}} searchString="" />, { store });

    userEvent.click(screen.getAllByText('Add to cart')[0]);

    getByTestId('flash-notification');
    getByText(clickedGadget.name);
    getByText(clickedGadget.price);
    getByText(secondGadget.name);
    getByText(secondGadget.price);
    getByText('Item successfully added to cart');
  });
});
