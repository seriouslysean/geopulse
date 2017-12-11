import { SET_VIDEOS } from "../actions/videos";

export const defaultState = false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return action.videos;
    default:
      return state;
  }
};
