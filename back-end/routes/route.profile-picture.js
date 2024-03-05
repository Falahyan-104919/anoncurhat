const express = require('express');
const route = express.Router();
const {
  uploadProfilePicture,
} = require('../controllers/controller.profile-picture');
const { verifyToken2 } = require('../middleware/authToken');
const { middlewarePicture } = require('../middleware/multer');

route.post(
  '/profile_picture',
  verifyToken2(),
  middlewarePicture,
  uploadProfilePicture
);

module.exports = route;
