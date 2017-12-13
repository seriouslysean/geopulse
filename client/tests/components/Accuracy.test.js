import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import geolocationProp from "../../../data/fixtures/geolocation";
import { Accuracy } from "../../src/components/Accuracy";

test("should show Accuracy loading correctly", () => {
  const wrapper = shallow(<Accuracy />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Accuracy correctly", () => {
  const wrapper = shallow(<Accuracy ready={true} geolocation={geolocationProp} />);
  expect(wrapper).toMatchSnapshot();
});
