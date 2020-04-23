import React from 'react';
import Homepage from '../containers/Homepage';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  render(<Homepage />);
});

it('should render a nav bar', () =>{
  const component = render(<Homepage />)
  expect(component.exists('.navbar')).toEqual(true);
})