import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ChatterTweetMedia from "../../src/components/ChatterTweetMedia";
import chatterProp from "../../../data/fixtures/chatter";

test("should render ChatterTweetMedia with content correctly", () => {
  const entity = chatterProp.collection[1].entities.media[0];
  const wrapper = shallow(<ChatterTweetMedia entity={entity} />);
  expect(wrapper).toMatchSnapshot();
});
