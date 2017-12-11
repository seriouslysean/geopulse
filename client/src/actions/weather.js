import axios from "axios";
import config from "../../../config/config";

export const getWeather = (latitude, longitude) => {
  const endpoint = `https://api.wunderground.com/api/${
    config.WEATHER_UNDERGROUND_API_TOKEN
  }/conditions/q/${latitude},${longitude}.json`;
  return async dispatch => {
    try {
      const data = await axios(endpoint);
      const {
        current_observation: { display_location: { city, state, country }, weather, temp_f, temp_c, icon, forecast_url }
      } = data.data;
      return dispatch(
        setWeather({
          city,
          state,
          country,
          weather,
          temp_f,
          temp_c,
          icon,
          forecast_url
        })
      );
    } catch (e) {
      console.log("Error fetching data", e);
    }
  };
};

export const SET_WEATHER = "SET_WEATHER";

export const setWeather = ({
  city = "",
  state = "",
  country = "",
  weather = "",
  temp_f = "",
  temp_c = "",
  icon = "",
  forecast_url = ""
}) => ({
  type: SET_WEATHER,
  city,
  state,
  country,
  weather,
  temp_f,
  temp_c,
  icon,
  forecast_url
});
