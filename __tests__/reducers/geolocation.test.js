import geolocationReducer, { geolocationReducerDefaultState } from "../../client/reducers/geolocation";

test("should set default state", () => {
  const state = geolocationReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual(geolocationReducerDefaultState);
});
