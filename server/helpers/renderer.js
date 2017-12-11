import React from "react";
import serialize from "serialize-javascript";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import AppRoutes from "../../client/src/routes/AppRoutes";

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
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        
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
