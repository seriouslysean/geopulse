import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Photos from "../../src/components/Photos";
import photosProp from "../../../data/fixtures/photos";

test("should render Photos correctly", () => {
  const wrapper = shallow(<Photos />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Photos with content correctly", () => {
  const wrapper = shallow(<Photos photos={photosProp} />);
  expect(wrapper).toMatchSnapshot();
});
