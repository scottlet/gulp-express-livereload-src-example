const express = require('express');
const index = require('./index');
const users = require('./users');
const router = express.Router();

router.get('/', index);
router.get('/users', users);

module.exports = router;
