const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  deletePost,
  updatePost,
} = require('../controllers/controller.posts');
const { verifyToken } = require('../middleware/authToken');

router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', verifyToken, createPost);
router.put('/posts', verifyToken, updatePost);
router.delete('/posts/:id', verifyToken, deletePost);

module.exports = router;
