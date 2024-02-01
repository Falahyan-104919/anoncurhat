const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
<<<<<<< HEAD
  'postgres://falahyan:123456@127.0.0.1:5432/anon_curhat'
=======
  'postgres://postgres:panorama3@127.0.0.1:5432/anon_curhat'
>>>>>>> features/comment_model_migrations
);

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { connectDb, sequelize };
