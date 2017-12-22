import React from 'react';
import { shallow } from 'enzyme';
import { AboutPage } from '../../src/pages/AboutPage';

test('should render AboutPage correctly', () => {
  const wrapper = shallow(<AboutPage />);
  expect(wrapper).toMatchSnapshot();
});
