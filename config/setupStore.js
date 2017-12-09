import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import locationReducer from "../client/reducers/location";
import weatherReducer from "../client/reducers/weather";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      location: locationReducer,
      weather: weatherReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
