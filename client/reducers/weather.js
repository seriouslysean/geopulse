import { SET_WEATHER } from "../actions/weather";

export const weatherReducerDefaultState = false;

export default (state = weatherReducerDefaultState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        city: action.city,
        state: action.state,
        country: action.country,
        weather: action.weather,
        temp_f: action.temp_f,
        temp_c: action.temp_c,
        icon: action.icon,
        forecast_url: action.forecast_url
      };
    default:
      return state;
  }
};
