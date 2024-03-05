const multer = require('multer');
const fs = require('fs');
const path = require('path');

const profilePictureStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join('public', 'img', 'profile_picture');
    fs.access(dir, (error) => {
      if (error) {
        if (error.code == 'ENOENT') {
          fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
      } else {
        cb(null, dir);
      }
    });
  },
  filename: (req, file, cb) => {
    const user_id = req.idUser;
    const filename = `${user_id}.webp`;
    cb(null, filename);
  },
});

const middlewarePicture = multer({ storage: profilePictureStorage }).single(
  'profile_picture'
);

module.exports = { middlewarePicture };
