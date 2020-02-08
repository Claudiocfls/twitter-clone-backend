const tweetsRoutes = require('./tweets.routes');
const likeRoutes = require('./like.routes');
const userRoutes = require('./user.routes');

function addRoutes(app) {
  [tweetsRoutes, likeRoutes, userRoutes].forEach(routes => app.use(routes));
}

module.exports = addRoutes;