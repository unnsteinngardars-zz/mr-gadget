import React from 'react';
import { render } from '@testing-library/react';
import GadgetDetails from './GadgetDetails';

const gadget = {
  name: 'foo',
  _id: '1',
  body_location: 'wrist',
  company_name: 'Nike',
  category: 'Fitness',
  image: 'foo-url',
  company_mapping_location: 'Iceland, Reykjavík',
  price: '$100',
};

describe('GadgetDetails', () => {
  test('should render the GadgetDetails component', () => {
    render(<GadgetDetails gadget={gadget} />);
  });

  test('should display the image, price, category, body location, company name and company location for the gadget', () => {
    const { getByText, getByAltText } = render(<GadgetDetails gadget={gadget} />);
    getByAltText(`${gadget.name}`);
    getByText(gadget.price);
    getByText(gadget.category);
    getByText(gadget.body_location);
    getByText(gadget.company_name);
    getByText(gadget.company_mapping_location);
  });
});
