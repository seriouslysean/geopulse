import { combineReducers } from "redux";
import geolocationReducer from "./geolocationReducer";
import weatherReducer from "./weatherReducer";
import photosReducer from "./photosReducer";
import chatterReducer from "./chatterReducer";

export default combineReducers({
  geolocation: geolocationReducer,
  weather: weatherReducer,
  photos: photosReducer,
  chatter: chatterReducer
});
