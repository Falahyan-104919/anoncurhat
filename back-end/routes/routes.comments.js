const express = require('express');
const routes = express.Router();
const {
  getComments,
  createComments,
  deleteComments,
} = require('../controllers/controller.comments');
const { verifyToken } = require('../middleware/authToken');

routes.get('/comments', getComments);
routes.post('/comments', verifyToken, createComments);
routes.delete('/comments/:id', verifyToken, deleteComments);

module.exports = routes;
