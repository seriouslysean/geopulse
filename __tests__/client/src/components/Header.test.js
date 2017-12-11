import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Header from "../../../../client/src/components/Header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
