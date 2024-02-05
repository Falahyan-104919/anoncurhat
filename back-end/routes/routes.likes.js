const express = require('express');
const router = express.Router();
const likeController = require('../controllers/controller.likes');

router.get('/posts/:post_id/likes', likeController.getLikes);
router.post('/likes', likeController.addLike);
router.delete('/likes/:likeId', likeController.removeLike);

module.exports = router;