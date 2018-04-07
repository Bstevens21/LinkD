'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //requirements field is for "I'm looking for people with x, y, z..."
    requirements: {
      type: DataTypes.STRING,
    },
    //success is for asking the user if his activity was successful (post-activity)
    success: {
      type: DataTypes.BOOLEAN,
    },
    expired: {
      type: DataTypes.BOOLEAN,
    },
    notes: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM,
      values: ['sport','event','game','food','outdoor','club'],
      allowNull: false,
    },
  }, {});

  // Post.associate = function(models) {
  //   //get owner with post.getOwner()
  //   Post.belongsTo(models.User,{
  //     as:owner,
  //   });
  //   //get interesteds with post.getInteresteds()
  //   //add interesteds with post.addInteresteds(interested)
  //   Post.hasMany(models.User, {
  //     as: interesteds,
  //   });
  // };
  return Post;
};