'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfilePicture extends Model {
    static associate(models) {
      this.belongsTo(models.Users), { foreignKey: 'user_id' };
    }
  }
  ProfilePicture.init(
    {
      id_profile_picture: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          models: 'users',
          key: 'id_user',
        },
      },
      filepath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ProfilePicture',
    }
  );
  return ProfilePicture;
};
