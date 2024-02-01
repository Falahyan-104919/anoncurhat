'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
    );
    await queryInterface.createTable('likes', {
      id_like: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id_user',
        },
      },
      post_id: {
        type: Sequelize.UUID,
        references: {
          model: 'posts',
          key: 'id_post',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('likes');
  },
};
