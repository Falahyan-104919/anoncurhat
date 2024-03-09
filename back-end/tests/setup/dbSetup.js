const shellJS = require('shelljs');
const { sequelize } = require('../../db/models');
shellJS.config.silent = true;

const refreshDb = async () => {
  shellJS.exec('npx sequelize-cli db:migrate:undo:all');
  shellJS.exec('npx sequelize-cli db:seed:undo:all');
  shellJS.exec('npx sequelize-cli db:migrate');
  shellJS.exec('npx sequelize-cli db:seed:all');
};

const connectDb = async () => {
  await sequelize.authenticate();
};

const disconnectDb = async () => {
  await sequelize.close();
};

module.exports = { refreshDb, connectDb, disconnectDb };
