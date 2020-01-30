const express = require('express');
const routes = express.Router();

routes.get('/teste', (req,res) => {
  res.send("agora vai");
});

module.exports = routes;