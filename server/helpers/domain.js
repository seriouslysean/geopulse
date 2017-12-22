import url from 'url';
import config from '../../config/config';

export const forcePrimaryDomain = (req, res, next) => {
  const currentHost = req.get('Host').split(':')[0];
  const domainHost = url.parse(config.BASE_URL);
  if (currentHost !== domainHost.hostname) {
    const redirectTo = config.BASE_URL + req.originalUrl;
    return res.redirect(301, redirectTo);
  }
  return next();
};

export const forceSSL = (req, res, next) => {
  if (config.FORCE_SSL) {
    const schema = req.headers['x-forwarded-proto'];
    if (schema !== 'https') {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
  }
  return next();
};
