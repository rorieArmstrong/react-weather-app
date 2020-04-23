import React from 'react';
import { render } from '@testing-library/react';
import Results from '../containers/Results'

describe('Results', () => {
    
    it('renders without crashing', () => {
        render(<Results match={{params: {city: 'paris', country: 'france' }}}/>);
    });
      
    it('should render a nav bar', () =>{
        const component = render(<Results match={{params: {city: 'paris', country: 'france' }}}/>)
        expect(component.exists('.navbar')).toEqual(true);
    })
})