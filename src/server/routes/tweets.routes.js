const express = require('express');
const routes = express.Router();

routes.get('/tweets', (req, res) => { res.send("rota de fetch")});
routes.post('/tweets', (req, res) => { res.send("rota de criaccao")});
routes.delete('/tweets/:id', (req, res) => { res.send("rota de delecao")});

module.exports = routes;
