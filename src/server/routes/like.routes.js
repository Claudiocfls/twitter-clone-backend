const express = require('express');
const routes = express.Router();

const LikeController = require('./../../controllers/like.controller');

routes.post('/like', LikeController.like);

module.exports = routes;