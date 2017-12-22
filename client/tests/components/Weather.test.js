import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../../src/components/Weather';
import weatherProp from '../../../data/fixtures/weather';

test('should show Weather loading correctly', () => {
  const wrapper = shallow(<Weather />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Weather with content correctly', () => {
  const wrapper = shallow(<Weather ready weather={weatherProp} />);
  expect(wrapper).toMatchSnapshot();
});
