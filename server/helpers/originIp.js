export const getOriginIp = req => {
  console.log(req.app.settings);
  return (
    req.app.settings.geopulseClientIP ||
    req.headers["cf-connecting-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress
  );
};
