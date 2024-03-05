const express = require('express');
const router = express.Router();
const likeController = require('../controllers/controller.likes');
const { verifyToken2 } = require('../middleware/authToken');
const jwt = require('jsonwebtoken');

router.post('/likes', verifyToken2(), likeController.addLike);
router.get(
  '/posts/:post_id/likes',
  verifyToken2(true),
  likeController.getLikes
);
router.delete('/likes/:likeId', verifyToken2(), likeController.removeLike);

module.exports = router;
