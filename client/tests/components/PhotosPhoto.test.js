import React from 'react';
import { shallow } from 'enzyme';
import PhotosPhoto from '../../src/components/PhotosPhoto';
import photosProp from '../../../data/fixtures/photos';

test('should render PhotosPhoto with content correctly', () => {
  const wrapper = shallow(<PhotosPhoto photo={photosProp.collection[0]} />);
  expect(wrapper).toMatchSnapshot();
});
