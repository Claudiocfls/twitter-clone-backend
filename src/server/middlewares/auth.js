const { getTokenFromHeader } = require('./../../utils');

function getAuthInfo() {
  return (req, res, next) => {
    const { error, token } = getTokenFromHeader(req.headers);
    if (error) {
      res.status(403).send('Permission not granted');
    }
    req.token = token;
    next();
  };  
};

module.exports = getAuthInfo;