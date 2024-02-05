'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Posts, { foreignKey: 'post_id' });
      this.belongsTo(models.Report_type, { foreignKey: 'report_type_id' });
    }
  }
  Reports.init(
    {
      id_report: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      post_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Posts',
          key: 'id_post',
        },
      },
      report_type_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Report_types',
          key: 'id_report_type',
        },
      },
    },
    {
      sequelize,
      modelName: 'Reports',
    }
  );
  return Reports;
};
