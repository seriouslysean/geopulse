import geolocationReducer, { defaultState } from "../../../../client/src/reducers/geolocationReducer";

test("should set default state", () => {
  const state = geolocationReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual(defaultState);
});
