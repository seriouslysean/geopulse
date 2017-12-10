import { SET_GEOLOCATION } from "../actions/geolocation";

export const geolocationReducerDefaultState = false;

export default (state = geolocationReducerDefaultState, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {
        latitude: action.latitude,
        longitude: action.longitude
      };
    default:
      return state;
  }
};
