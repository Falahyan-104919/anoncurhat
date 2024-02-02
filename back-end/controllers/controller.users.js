const db = require('../db/models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const getUsers = async (req, res) => {
  try {
    const users = await db.Users.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.Users.findByPk(id);
    if (user == null) {
      return res.status(404).json({
        message: 'User Not Found!',
      });
    }
    res.status(200).json(user.dataValues);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Erros',
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password, gender, date_of_birth } = req.body;
    const isUnique = await db.Users.findOne({
      where: {
        username: {
          [Op.iLike]: `%${username}%`,
        },
      },
    });
    if (isUnique != null) {
      return res.status(402).json({
        message: 'Username already taken!',
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await db.Users.create({
      username: username,
      password: hashPassword,
      gender: gender,
      date_of_birth: date_of_birth,
    });
    res.status(201).json(`User with the ID ${newUser.id_user}`);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, gender, date_of_birth } = req.body;
    const checkUser = await db.Users.findByPk(id);
    if (checkUser == null) {
      return res.status(404).json({
        message: 'User not Found',
      });
    }
    await db.Users.update(
      { username, gender, date_of_birth },
      {
        where: {
          id_user: id,
        },
      }
    );
    res.status(200).json({
      message: 'Update Profile Success',
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const checkUser = await db.Users.findByPk(id);
    if (checkUser == null) {
      return res.status(404).json({
        message: 'User not Found',
      });
    }
    await db.Users.update({ active: false }, { where: { id_user: id } });
    res.status(200).json({
      message: 'Deleting User Successfull',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;
    const user = await db.Users.findOne({ where: { id_user: id } });
    const isMatch = bcrypt.compareSync(
      oldPassword,
      user.dataValues['password']
    );
    if (!isMatch) {
      return res.status(401).json({
        message: "Password Didn't Match",
      });
    }
    const password = await bcrypt.hash(newPassword, 10);
    await db.Users.update(
      { password: password },
      {
        where: {
          id_user: id,
        },
      }
    );
    res.status(200).json({
      message: 'Change Password is Successfull',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  changePassword,
};
