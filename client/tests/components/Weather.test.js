import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Weather from "../../src/components/Weather";
import weatherProp from "../../../data/fixtures/weather";

test("should render Weather correctly", () => {
  const wrapper = shallow(<Weather />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Weather with content correctly", () => {
  const wrapper = shallow(<Weather weather={weatherProp} />);
  expect(wrapper).toMatchSnapshot();
});
