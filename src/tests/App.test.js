import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  render(<App />);
});

it('should render two Routes', () =>{
  const component = render(<App/>);
  expect(component.find('').length).toEqual(2);
})