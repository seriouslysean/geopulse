import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRoutes from "./routes/AppRoutes";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, window.INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));

const html = (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app-container">{renderRoutes(AppRoutes)}</div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(html, document.querySelector("#root"));
