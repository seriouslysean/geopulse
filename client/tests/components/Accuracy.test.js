import React from 'react';
import { shallow } from 'enzyme';
import geolocationProp from '../../../data/fixtures/geolocation';
import { Accuracy } from '../../src/components/Accuracy';

test('should show Accuracy loading correctly', () => {
  const wrapper = shallow(<Accuracy />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Accuracy correctly', () => {
  const wrapper = shallow(<Accuracy ready geolocation={geolocationProp} />);
  expect(wrapper).toMatchSnapshot();
});
