import express from 'express';
import compression from 'compression';
import { matchRoutes } from 'react-router-config';
import { forcePrimaryDomain, forceSSL } from '../helpers/domain';
import getOriginIp from '../helpers/originIp';
import Routes from '../../client/src/routes/AppRoutes';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';

const port = process.env.PORT || 3000;
const app = express();

app.set('trust proxy');
app.use(compression());

if (process.env.NODE_ENV === 'production') {
  app.use(forcePrimaryDomain);
  app.use(forceSSL);
}

app.use(express.static('client/public'));

require('../routes/chatter')(app);
require('../routes/geolocation')(app);

app.get('*', (req, res) => {
  const clientIp = getOriginIp(req);
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) =>
      (route.loadData
        ? route.loadData({
          ...store,
          clientIp,
        })
        : null))
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(port, () => {
  console.log('The magic is happening on port', port);
});
