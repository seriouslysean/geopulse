import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import ReactGA from 'react-ga';
import 'normalize.css/normalize.css';
import config from '../../config/config';
import './styles/styles.scss';
import AppRoutes from './routes/AppRoutes';
import reducers from './reducers';

if (config.GOOGLE_TRACKING_ID && process.env.NODE_ENV === 'production') {
  ReactGA.initialize(config.GOOGLE_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, window.INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));

const html = (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app-container">{renderRoutes(AppRoutes)}</div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(html, document.querySelector('#root'));
