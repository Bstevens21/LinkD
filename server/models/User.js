'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        msg: "Email is invalid.",
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ['new','verified','inactive','deleted','admin'],
      defaultValue: 'new',
      allowNull: false,
    },
  });
  //get posts with user.getPosts()
  User.associate = (models) => {
    User.hasMany(models.Post, {
      as: 'posts',
      onDelete: 'cascade',
      hooks: true,
    });
    //get notifications with user.getNotifications()
    User.hasMany(models.Notification, {
      as: 'notifications',
      onDelete: 'cascade',
      hooks: true,
    });
  };

  return User;
};