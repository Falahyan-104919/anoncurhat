const express = require('express');
const router = express.Router();

const authRoutes = require('./routes.auth');
const userRoutes = require('./route.users');
const postRoutes = require('./routes.posts');

router.use(authRoutes);
router.use(userRoutes);
router.use(postRoutes);

module.exports = router;
