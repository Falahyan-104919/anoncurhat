'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // associations can be defined here
      this.hasMany(models.Posts, { foreignKey: 'user_id' });
      this.hasMany(models.Comments, { foreignKey: 'user_id' });
      this.hasMany(models.Likes, { foreignKey: 'user_id' });
    }
  }
  Users.init(
    {
      id_user: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
