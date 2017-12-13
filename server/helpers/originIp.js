export const getOriginIp = req => {
  return (
    req.params.clientId ||
    req.headers["cf-connecting-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress
  );
};
