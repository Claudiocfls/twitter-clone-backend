const axios = require('axios');

const getUserEmail = async token => {
  const { data } = await axios.get('https://cfls-twitter.auth0.com/userinfo', {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  const { email } = data;

  return Promise.resolve(email);
}

module.exports = {
  getUserEmail,
}