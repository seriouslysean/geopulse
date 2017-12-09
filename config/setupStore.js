import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import geolocationReducer from "../client/reducers/geolocation";
import weatherReducer from "../client/reducers/weather";
import photosReducer from "../client/reducers/photos";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      geolocation: geolocationReducer,
      weather: weatherReducer,
      photos: photosReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
