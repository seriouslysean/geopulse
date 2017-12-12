import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { App } from "../../src/components/App";

test("should render App correctly", () => {
  const routeProp = {
    route: {
      routes: {}
    }
  };
  const wrapper = shallow(<App route={routeProp} />);
  expect(wrapper).toMatchSnapshot();
});
