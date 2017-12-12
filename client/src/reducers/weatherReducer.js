import { SET_WEATHER } from "../actions/weather";

export const defaultState = false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return action.weather;
    default:
      return state;
  }
};
