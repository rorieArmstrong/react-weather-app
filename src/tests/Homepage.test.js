import React from 'react';
import Homepage from '../containers/Homepage';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  render(<Homepage />);
});
