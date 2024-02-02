const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  deletePost,
  updatePost,
} = require('../controllers/controller.posts');

router.get('/posts', getPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', createPost);
router.put('/posts', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
