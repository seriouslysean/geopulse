import { SET_GEOLOCATION, SET_GEOLOCATION_UNAVAILABLE } from "../actions/geolocation";

export const defaultState = false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {
        latitude: action.latitude,
        longitude: action.longitude,
        accurate: action.accurate
      };
    case SET_GEOLOCATION_UNAVAILABLE:
      return {
        unavailable: true
      };
    default:
      return state;
  }
};
