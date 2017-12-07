import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import App from "../../components/App.js";

test("should render App correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
