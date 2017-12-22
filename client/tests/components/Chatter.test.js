import React from 'react';
import { shallow } from 'enzyme';
import Chatter from '../../src/components/Chatter';
import chatterProp from '../../../data/fixtures/chatter';

test('should show Chatter loading correctly', () => {
  const wrapper = shallow(<Chatter />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Chatter with content correctly', () => {
  const wrapper = shallow(<Chatter ready chatter={chatterProp} />);
  expect(wrapper).toMatchSnapshot();
});
