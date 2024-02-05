require('dotenv').config();
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  changePassword,
} = require('../controllers/controller.users');
const { verifyToken } = require('../middleware/authToken');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);
router.put('/users/change_password/:id', verifyToken, changePassword);

module.exports = router;
