import axiosInstance from "../helpers/axiosInstance";
import { defaultState } from "../reducers/geolocationReducer";

export const getIpGeoLocation = () => {
  const endpoint = "/api/geolocation";
  return async dispatch => {
    try {
      const data = await axiosInstance.get(endpoint);
      const { latitude, longitude } = data.data;
      return dispatch(setGeolocation(latitude, longitude));
    } catch (e) {
      console.error("Error fetching data", e);
    }
  };
};

export const getGeolocation = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          location => {
            const { latitude, longitude } = location.coords;
            dispatch(setGeolocation(latitude, longitude, true));
            resolve(location.coords);
          },
          () => {
            reject("Geolocation failed");
          },
          {
            timeout: 10000
          }
        );
      } else {
        reject("Geolocation services unavailable");
      }
    });
  };
};

export const SET_GEOLOCATION = "SET_GEOLOCATION";
export const setGeolocation = (latitude = false, longitude = false, accurate = false) => ({
  type: SET_GEOLOCATION,
  latitude,
  longitude,
  accurate
});

export const SET_GEOLOCATION_UNAVAILABLE = "SET_GEOLOCATION_UNAVAILABLE";
export const setGeolocationUnavailable = () => ({
  type: SET_GEOLOCATION_UNAVAILABLE
});
