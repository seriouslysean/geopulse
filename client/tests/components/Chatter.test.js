import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Chatter from "../../src/components/Chatter";
import chatterProp from "../../../data/fixtures/chatter";

test("should show Chatter loading correctly", () => {
  const wrapper = shallow(<Chatter />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Chatter with content correctly", () => {
  const wrapper = shallow(<Chatter ready={true} chatter={chatterProp} />);
  expect(wrapper).toMatchSnapshot();
});
