const getTokenFromHeader = headers => {
  const authorization = headers.authorization;
  
  if (!authorization) {
    return {
      error: true,
      token: null,
    };
  }

  const [,token] = authorization.split(' ');

  if (!token) {
    return {
      error: true,
      token: null,
    };
  }

  return {
    error: false,
    token,
  };
}

module.exports = { getTokenFromHeader };