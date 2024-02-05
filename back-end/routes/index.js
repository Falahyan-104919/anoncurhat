const express = require('express');
const router = express.Router();

const authRoutes = require('./routes.auth');
const userRoutes = require('./route.users');
const postRoutes = require('./routes.posts');
const commentRoutes = require('./routes.comments');
const likeRoutes = require('./routes.likes');

router.use(authRoutes);
router.use(userRoutes);
router.use(postRoutes);
router.use(commentRoutes);
router.use(likeRoutes);

module.exports = router;
