import React from 'react';
import NavBar from '../components/NavBar';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
    render(<NavBar />);
});

it('Displays a Home link', () => {
    const { getByText } = render(<NavBar />);
    expect(getByText('Home')).toBeInTheDocument();
})