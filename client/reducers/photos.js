import { SET_PHOTOS } from "../actions/photos";

export const photoReducerDefaultState = false;

export default (state = photoReducerDefaultState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};
