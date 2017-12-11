import { SET_CHATTER } from "../actions/chatter";

export const chatterReducerDefaultState = false;

export default (state = chatterReducerDefaultState, action) => {
  switch (action.type) {
    case SET_CHATTER:
      return action.chatter;
    default:
      return state;
  }
};
