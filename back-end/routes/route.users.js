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

router.use('users/');
router.get(getUsers);
router.get(':id', getUserById);
router.post(createUser);
router.put(':id', updateUser);
router.delete(':id', deleteUser);
router.put('change_password/:id', changePassword);

module.exports = router;
