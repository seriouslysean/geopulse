import config from "../../config/config";

export const getPhotos = (latitude, longitude) => {
  const photosEndpoint = `https://api.instagram.com/v1/media/search?access_token=${config.INSTAGRAM_API_TOKEN}&lat=${
    latitude
  }&lng=${longitude}&distance=3000`;
  return async dispatch => {
    try {
      console.log("set photos");
      // const photosData = await axios(photosEndpoint);
      // const {
      //   current_observation: { display_location: { city, state, country }, weather, temp_f, temp_c, icon, forecast_url }
      // } = weatherData.data;
      // return dispatch(
      //   setWeather({
      //     city,
      //     state,
      //     country,
      //     weather,
      //     temp_f,
      //     temp_c,
      //     icon,
      //     forecast_url
      //   })
      // );
    } catch (e) {
      console.log("Error fetching weather data", e);
    }
  };
};

export const SET_PHOTOS = "SET_PHOTOS";
export const setPhotos = photos => ({
  type: SET_PHOTOS,
  photos
});
