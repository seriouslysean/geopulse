import axios from "axios";
import config from "../../../config/config";

export const getWeather = (latitude, longitude) => {
  const endpoint = `https://api.wunderground.com/api/${
    config.WEATHER_UNDERGROUND_API_TOKEN
  }/conditions/q/${latitude},${longitude}.json`;
  return async dispatch => {
    try {
      const data = await axios(endpoint);
      const weather = data.data.current_observation;
      return dispatch(setWeather(weather));
    } catch (e) {
      console.log("Error fetching data", e);
    }
  };
};

export const SET_WEATHER = "SET_WEATHER";

export const setWeather = weather => ({
  type: SET_WEATHER,
  weather
});
