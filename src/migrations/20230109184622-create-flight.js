'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      airplaneId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      departureAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      arrivalAirportId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      arrivalTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      departureTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 200
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};