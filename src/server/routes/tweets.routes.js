const express = require('express');
const routes = express.Router();

const TweetsController = require('../../controllers/tweets.controller');

routes.get('/tweets', TweetsController.getAll);
routes.post('/tweets',TweetsController.create);
routes.delete('/tweets/:id', (req, res) => { res.send("rota de delecao")});

module.exports = routes;