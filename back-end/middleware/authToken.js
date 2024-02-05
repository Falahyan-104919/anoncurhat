require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).json({
        message: 'Token not Provided',
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).json({
          message: `Error :  ${err.name}`,
        });
      }
      return decoded;
    });
    if (decode) {
      next();
    }
  } catch (err) {
    console.error(err);
    return res.status(401).json({
      message: 'Invalid Token',
    });
  }
};

module.exports = { verifyToken };
