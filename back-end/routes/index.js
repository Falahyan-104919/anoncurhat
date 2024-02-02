const express = require('express');
const router = express.Router();

const userRoutes = require('./route.users');

router.use(userRoutes);

module.exports = router;
