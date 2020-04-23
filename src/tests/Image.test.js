import React from 'react';
import Image from '../components/Image';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
    render(<Image />);
});
