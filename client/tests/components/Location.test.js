import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import geolocationProp from "../../../data/fixtures/geolocation";
import Location from "../../src/components/Location";

test("should render Location correctly", () => {
  const wrapper = shallow(
    <Location
      ready={true}
      geolocation={geolocationProp}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
