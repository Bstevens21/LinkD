'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duration: {
        type: Sequelize.TIME,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      requirements: {
        type: Sequelize.STRING,
      },
      success: {
        type: Sequelize.BOOLEAN,
      },
      expired: {
        type: Sequelize.BOOLEAN,
      },
      notes: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.ENUM,
        values: ['sport','event','game','food','outdoor','club', 'other'],
        allowNull: false,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};