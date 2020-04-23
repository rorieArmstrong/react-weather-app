import React from 'react';
import Image from '../components/Image';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
    render(<Image />);
});

it('should render a nav bar', () =>{
    const component = render(<Image />)
    expect(component.contains('.image')).toEqual(true);
  })