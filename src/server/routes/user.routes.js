const express = require('express');
const router = express.Router();

const UserController = require('./../../controllers/user.controller');

router.post('/user/create', UserController.create);

module.exports = router;
