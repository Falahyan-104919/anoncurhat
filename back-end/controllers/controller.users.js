const db = require('../db/models');

const getUsers = async (req, res) => {
  try {
    const users = await db.Users.findAll();
    console.log('success', users);
    // return res.status(200).json({ success: true, data: users });
  } catch (err) {
    console.error(err);
    // res.status(500).json({
    //   success: false,
    // });
  }
};

module.exports = { getUsers };
