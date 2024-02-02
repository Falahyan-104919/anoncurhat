'use strict';
const bcrypt = require('bcrypt');
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
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin1',
        password: await bcrypt.hash('testpassword', 10),
        gender: 'male',
        role: 'admin',
        date_of_birth: new Date('2001-07-24'),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'admin2',
        password: await bcrypt.hash('testpassword', 10),
        gender: 'male',
        role: 'admin',
        date_of_birth: new Date('2001-07-24'),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'admin3',
        password: await bcrypt.hash('testpassword', 10),
        gender: 'female',
        role: 'admin',
        date_of_birth: new Date('2001-07-24'),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'admin4',
        password: await bcrypt.hash('testpassword', 10),
        gender: 'female',
        role: 'admin',
        date_of_birth: new Date('2001-07-24'),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user1',
        password: await bcrypt.hash('testpassword', 10),
        gender: 'male',
        role: 'user',
        date_of_birth: new Date('2001-07-24'),
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
