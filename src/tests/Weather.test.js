import React from 'react';
import {shallow, mount} from 'enzyme';
import Weather from '../components/Weather'
import { render } from '@testing-library/react';

describe('Weather', () => {
    const data = {
        "coord":{"lon":-0.13,"lat":51.51},
        "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
        "base":"stations",
        "main":{"temp":295.75,"feels_like":292.39,"temp_min":294.82,"temp_max":297.59,"pressure":1018,"humidity":35},
        "visibility":10000,
        "wind":{"speed":3.6,"deg":80},
        "clouds":{"all":63},
        "dt":1587651911,
        "sys":{"type":1,"id":1414,"country":"GB","sunrise":1587617225,"sunset":1587669006},
        "timezone":3600,
        "id":2643743,
        "name":"London",
        "cod":200
    }

    const wrapper = mount(<Weather />);


    test('should render a div with 4 children', () => {
        expect(wrapper.find('.container').length).toEqual(4);
    })
    
})