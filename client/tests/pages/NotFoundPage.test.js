import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { NotFoundPage } from "../../src/pages/NotFoundPage";

test("should render NotFoundPage correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
