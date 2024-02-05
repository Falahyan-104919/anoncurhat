const express = require('express');
const router = express.Router();
const likeController = require('../controllers/controller.likes');
const { verifyToken } = require('../middleware/authToken');

router.get('/posts/:post_id/likes', likeController.getLikes);
router.post('/likes', verifyToken, likeController.addLike);
router.delete('/likes/:likeId', verifyToken, likeController.removeLike);

module.exports = router;
