'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {modelNumber:'Boeing 747',capacity:660,createdAt:new Date(),updatedAt:new Date()},
    {modelNumber:'Airbus A380',capacity:868,createdAt:new Date(),updatedAt:new Date()},
    {modelNumber:'Boeing 777',capacity:396,createdAt:new Date(),updatedAt:new Date()},
    {modelNumber:'Airbus A330',capacity:440,createdAt:new Date(),updatedAt:new Date()},
    {modelNumber:'Bombardier CRJ',capacity:100,createdAt:new Date(),updatedAt:new Date()},
    {modelNumber:'Embraer E190',capacity:114,createdAt:new Date(),updatedAt:new Date()},
   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
