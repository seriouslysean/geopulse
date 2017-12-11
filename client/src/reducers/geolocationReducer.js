import { SET_GEOLOCATION, SET_GEOLOCATION_UNAVAILABLE } from "../actions/geolocation";

export const geolocationReducerDefaultState = false;

export default (state = geolocationReducerDefaultState, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {
        latitude: action.latitude,
        longitude: action.longitude
      };
    case SET_GEOLOCATION_UNAVAILABLE:
      return {
        unavailable: true
      };
    default:
      return state;
  }
};
