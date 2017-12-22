import React from 'react';
import { shallow } from 'enzyme';
import Unavailable from '../../src/components/Unavailable';

test('should render Unavailable correctly', () => {
  const wrapper = shallow(<Unavailable />);
  expect(wrapper).toMatchSnapshot();
});
