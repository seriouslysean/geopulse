import photosReducer, { defaultState } from "../../src/reducers/photosReducer";

test("should set photosReducer default state", () => {
  const state = photosReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual(defaultState);
});
