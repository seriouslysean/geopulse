import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Footer from "../../src/components/Footer";

test("should render Footer correctly", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
