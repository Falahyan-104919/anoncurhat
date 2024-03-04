const db = require("../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.Users.findOne({
      where: { username: username },
    });
    if (user == null) {
      return res.status(404).json({
        message: "User not Found",
      });
    }
    const { dataValues } = user;
    const isValidPassword = await bcrypt.compare(
      password,
      dataValues["password"]
    );

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id_user: dataValues.id_user,
        role: dataValues.role,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      message: "Authentications is Successfull",
      token,
      user_data: dataValues,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { login };
