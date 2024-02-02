'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { foreignKey: 'user_id' });
      this.belongsTo(models.Posts, { foreignKey: 'post_id' });
    }
  }
  Likes.init(
    {
      id_like: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id_user',
        },
      },
      post_id: {
        type: DataTypes.UUID,
        references: {
          model: 'posts',
          key: 'id_post',
        },
      },
    },
    {
      sequelize,
      modelName: 'Likes',
    }
  );
  return Likes;
};
