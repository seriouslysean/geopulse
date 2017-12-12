import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { AboutPage } from "../../src/pages/AboutPage";

test("should render AboutPage correctly", () => {
  const wrapper = shallow(<AboutPage />);
  expect(wrapper).toMatchSnapshot();
});
