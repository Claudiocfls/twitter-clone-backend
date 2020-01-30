const express = require('express');
const middleware = express.Router();

middleware.use((req,res,next) => {
  console.log("to no meio da request");
  next();
});

module.exports = middleware;