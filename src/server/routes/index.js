const tweetsRoutes = require('./tweets.routes');

function addRoutes(app) {
  [tweetsRoutes].forEach(routes => app.use(routes));
}

module.exports = addRoutes;