const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  deletePost,
  updatePost,
} = require('../controllers/controller.posts');
const { verifyToken2 } = require('../middleware/authToken');

router.get('/posts', verifyToken2(true), getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', verifyToken2(), createPost);
router.put('/posts', verifyToken2(), updatePost);
router.delete('/posts/:id', verifyToken2(), deletePost);

module.exports = router;
