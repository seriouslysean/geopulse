export const getLocation = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          location => {
            const { latitude, longitude } = location.coords;
            dispatch(setLocation(latitude, longitude));
            resolve("Location set");
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

export const setLocation = (latitude = false, longitude = false) => ({
  type: "SET_LOCATION",
  latitude,
  longitude
});
