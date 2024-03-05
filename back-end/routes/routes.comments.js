const express = require('express');
const routes = express.Router();
const {
  getComments,
  createComments,
  deleteComments,
} = require('../controllers/controller.comments');
const { verifyToken2 } = require('../middleware/authToken');

routes.get('/comments', verifyToken2(true), getComments);
routes.post('/comments', verifyToken2(), createComments);
routes.delete('/comments/:id', verifyToken2(), deleteComments);

module.exports = routes;
