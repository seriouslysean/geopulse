export const getGeolocation = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          location => {
            const { latitude, longitude } = location.coords;
            dispatch(setGeolocation(latitude, longitude));
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
export const setGeolocation = (latitude = false, longitude = false) => ({
  type: SET_GEOLOCATION,
  latitude,
  longitude
});
