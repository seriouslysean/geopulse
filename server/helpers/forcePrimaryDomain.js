import url from 'url';
import config from '../../config/config';

const forcePrimaryDomain = (req, res, next) => {
  const currentHost = req.get('Host').split(':')[0];
  const domainHost = url.parse(config.BASE_URL);
  if (currentHost !== domainHost.hostname) {
    const redirectTo = config.BASE_URL + req.originalUrl;
    return res.redirect(301, redirectTo);
  }
  return next();
};

export default forcePrimaryDomain;
