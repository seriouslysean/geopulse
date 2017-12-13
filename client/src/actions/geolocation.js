import axiosInstance from "../helpers/axiosInstance";
import { defaultState } from "../reducers/geolocationReducer";

export const getIpGeoLocation = (clientIp = false) => {
  const endpoint = `/api/geolocation/${clientIp}`;
  return async dispatch => {
    try {
      const data = await axiosInstance.get(endpoint);
      const { latitude, longitude } = data.data;
      return dispatch(
        setGeolocation({
          latitude,
          longitude,
          accurate: false
        })
      );
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
            dispatch(
              setGeolocation({
                latitude,
                longitude,
                accurate: true
              })
            );
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
export const setGeolocation = (geolocation = defaultState) => ({
  type: SET_GEOLOCATION,
  geolocation
});

export const SET_GEOLOCATION_UNAVAILABLE = "SET_GEOLOCATION_UNAVAILABLE";
export const setGeolocationUnavailable = () => ({
  type: SET_GEOLOCATION_UNAVAILABLE
});
