import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ChatterTweet from "../../src/components/ChatterTweet";
import chatterProp from "../../../data/fixtures/chatter";

test("should render ChatterTweet with content correctly", () => {
  const wrapper = shallow(<ChatterTweet tweet={chatterProp.collection[0]} />);
  expect(wrapper).toMatchSnapshot();
});
