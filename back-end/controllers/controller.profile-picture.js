const db = require('../db/models');

const uploadProfilePicture = async (req, res) => {
  try {
    const id_user = req.idUser;
    const { filename, path } = req.file;
    await db.ProfilePicture.create({
      user_id: id_user,
      filepath: path,
      filename: filename,
    });
    res.status(201).json({ message: 'Successfully Upload Profile Image' });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

module.exports = { uploadProfilePicture };
