import React from 'react';
import { shallow } from 'enzyme';
import Videos from '../../src/components/Videos';
import videosProp from '../../../data/fixtures/videos';

test('should show Videos loading correctly', () => {
  const wrapper = shallow(<Videos />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Videos with content correctly', () => {
  const wrapper = shallow(<Videos ready videos={videosProp} />);
  expect(wrapper).toMatchSnapshot();
});
