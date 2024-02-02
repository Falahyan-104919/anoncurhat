const express = require('express');
const router = express.Router();

const authRoutes = require('./routes.auth');
const userRoutes = require('./route.users');

router.use(authRoutes);
router.use(userRoutes);

module.exports = router;
