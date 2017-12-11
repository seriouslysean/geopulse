import { SET_CHATTER } from "../actions/chatter";

export const defaultState = false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CHATTER:
      return action.chatter;
    default:
      return state;
  }
};
