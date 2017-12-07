import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Header from "../../components/Header.js";

test("should render Header correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
