'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('notification', {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  // Notification.associate = function(models) {
  //   Notification.belongsTo(models.User);
  // };
  return Notification;
};