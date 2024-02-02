'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
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
  Comments.init(
    {
      id_comment: {
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
      modelName: 'Comments',
    }
  );
  return Comments;
};
