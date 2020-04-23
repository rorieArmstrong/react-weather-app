import React from 'react';
import Search from '../components/Search';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
    render(<Search />);
});

it('Displays 3 inputs', () => {
    const { getByTestId } = render(<Search />);
    const form = getByTestId('search-form');
  expect(form.children.length).toBe(3);  
});
