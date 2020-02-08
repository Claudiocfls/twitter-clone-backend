const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { getUserEmail } = require('../../services/auth.service');
const { getTokenFromHeader } = require('./../../utils');

const authConfig = {
  domain: process.env.AUTH_DOMAIN,
  audience: process.env.AUTH_AUDIENCE,
};

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

function getAuthInfo() {
  return checkJwt;
}

function getUserInfoFromToken() {
  return async (req, res, next) => {
    const { token } = getTokenFromHeader(req.headers);

    req.user.email = await getUserEmail(token);

    next();
  };  
};

module.exports = {
  getAuthInfo,
  getUserInfoFromToken,
};
