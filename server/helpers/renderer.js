import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import AppRoutes from '../../client/src/routes/AppRoutes';

export default (req, store, context) => {
  const html = (
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div className="app-container">{renderRoutes(AppRoutes)}</div>
      </StaticRouter>
    </Provider>
  );
  const content = renderToString(html);
  const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        ${helmet.title.toString()}
        ${helmet.meta.toString()}

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#43578c">

        <!-- iOS -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="Geopulse">
        <link rel="apple-touch-startup-image" href="/assets/geopulse-splash.png">
      
        <!-- Other -->
        <meta name="application-name" content="Geopulse">
        <meta name="theme-color" content="#43578c">
        <meta name="format-detection" content="telephone=no">
      
        <!-- Social -->
        <meta itemprop="name" content="Geopulse">
        <meta itemprop="description" content="Get a pulse on the happenings nearby">
        <meta itemprop="image" content="https://geopulse-app.herokuapp.com/assets/geopulse-banner.png">
      
        <meta property="og:image" content="https://geopulse-app.herokuapp.com/assets/geopulse-banner.png">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="628">
        <meta property="og:title" content="Geopulse">
        <meta property="og:description" content="Get a pulse on the happenings nearby">
        <meta property="og:url" content="https://geopulse-app.herokuapp.com">
      
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Geopulse">
        <meta name="twitter:description" content="Get a pulse on the happenings nearby">
        <meta name="twitter:creator" content="@seriouslysean">
        <meta name="twitter:image" content="https://geopulse-app.herokuapp.com/assets/geopulse-banner.png">
        
        <link rel="stylesheet" type="text/css" href="bundle.css" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
};
