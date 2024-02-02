'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { foreignKey: 'user_id' });
      this.hasMany(models.Comments, { foreignKey: 'post_id' });
      this.hasMany(models.Likes, { foreignKey: 'post_id' });
      this.hasMany(models.Reports, { foreignKey: 'post_id' });
    }
  }
  Posts.init(
    {
      id_post: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      count_likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      count_comments: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id_user',
        },
      },
    },
    {
      sequelize,
      modelName: 'Posts',
    }
  );
  return Posts;
};
