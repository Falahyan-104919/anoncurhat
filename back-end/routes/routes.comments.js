const express = require('express');
const routes = express.Router();
const {
  getComments,
  createComments,
  deleteComments,
} = require('../controllers/controller.comments');

routes.get('/comments', getComments);
routes.post('/comments', createComments);
routes.delete('/comments/:id', deleteComments);

module.exports = routes;
