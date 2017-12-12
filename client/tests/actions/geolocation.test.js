import {
  SET_GEOLOCATION,
  setGeolocation,
  SET_GEOLOCATION_UNAVAILABLE,
  setGeolocationUnavailable
} from "../../src/actions/geolocation";
import geolocation from "../../../data/fixtures/geolocation";

test("should generate setGeolocation action object", () => {
  const { latitude, longitude } = geolocation;
  const action = setGeolocation(latitude, longitude);
  expect(action).toEqual({
    type: SET_GEOLOCATION,
    latitude,
    longitude
  });
});

test("should generate setGeolocationUnavailable action object", () => {
  const action = setGeolocationUnavailable();
  expect(action).toEqual({
    type: SET_GEOLOCATION_UNAVAILABLE
  });
});
