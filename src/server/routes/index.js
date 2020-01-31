const tweetsRoutes = require('./tweets.routes');
const likeRoutes = require('./like.routes');

function addRoutes(app) {
  [tweetsRoutes, likeRoutes].forEach(routes => app.use(routes));
}

module.exports = addRoutes;