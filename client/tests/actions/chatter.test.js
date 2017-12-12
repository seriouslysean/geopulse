import { SET_CHATTER, setChatter } from "../../src/actions/chatter";
import chatter from "../../../data/fixtures/chatter";

test("should generate setChatter action object", () => {
  const action = setChatter(chatter);
  expect(action).toEqual({
    type: SET_CHATTER,
    chatter
  });
});
