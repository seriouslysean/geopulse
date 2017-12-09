import locationReducer, { locationReducerDefaultState } from "../../client/reducers/location";

test("should set default state", () => {
  const state = locationReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual(locationReducerDefaultState);
});
