'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      duration: {
        type: Sequelize.TIME,
        allowNull: false,
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
        values: ['sport','event','game','food','outdoor','club'],
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};