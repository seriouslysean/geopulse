import chatterReducer, { defaultState } from "../../src/reducers/chatterReducer";

test("should set chatterReducer default state", () => {
  const state = chatterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual(defaultState);
});
