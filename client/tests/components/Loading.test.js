import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Loading from "../../src/components/Loading";

test("should render Loading correctly", () => {
  const wrapper = shallow(<Loading />);
  expect(wrapper).toMatchSnapshot();
});
