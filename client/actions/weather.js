import axios from "axios";
import weatherData from "../../__tests__/fixtures/weather";

export const getWeather = (latitude, longitude) => {
  const weatherEndpoint = `http://api.wunderground.com/api/424345db26b368ff/conditions/q/${latitude},${longitude}.json`;
  return async dispatch => {
    try {
      // const weatherData = await axios(weatherEndpoint);
      const {
        current_observation: { display_location: { city, state, country }, weather, temp_f, temp_c, icon, forecast_url }
      } = weatherData.data;
      dispatch(
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
      console.log("Error fetching weather data", e);
    }
  };
};

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
  type: "SET_WEATHER",
  city,
  state,
  country,
  weather,
  temp_f,
  temp_c,
  icon,
  forecast_url
});
