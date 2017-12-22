import React from 'react';
import { shallow } from 'enzyme';
import VideosVideo from '../../src/components/VideosVideo';
import videosProp from '../../../data/fixtures/videos';

test('should render VideosVideo with content correctly', () => {
  const wrapper = shallow(<VideosVideo video={videosProp.collection[0]} />);
  expect(wrapper).toMatchSnapshot();
});
