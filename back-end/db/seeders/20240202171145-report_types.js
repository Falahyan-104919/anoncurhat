'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Report_types',
      [
        { name: 'SARA', createdAt: new Date(), updatedAt: new Date() },
        { name: 'SPAM', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Insult', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Nudity', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Violence', createdAt: new Date(), updatedAt: new Date() },
        { name: 'False News', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Other', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Report_types', null, {});
  },
};
