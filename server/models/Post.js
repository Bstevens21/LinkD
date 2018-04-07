'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    postTitle: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
    },
    postStartTime: {
      field: 'startTime',
      type: DataTypes.DATE,
      allowNull: false,
    },
    postDuration: {
      field: 'duration',
      type: DataTypes.TIME,
      allowNull: false,
    },
    postLocation: {
      field: 'location',
      type: DataTypes.STRING,
      allowNull: false,
    },
    //requirements field is for "I'm looking for people with x, y, z..."
    postRequirements: {
      field: 'requirements',
      type: DataTypes.STRING,
    },
    //success is for asking the user if his activity was successful (post-activity)
    postSuccess: {
      field: 'success',
      type: DataTypes.BOOLEAN,
    },
    postExpired: {
      field: 'expired',
      type: DataTypes.BOOLEAN,
    },
    postNotes: {
      field: 'notes',
      type: DataTypes.STRING,
    },
    postBody: {
      field: 'body',
      type: DataTypes.STRING,
      allowNull: false,
    },
    postCategory: {
      field: 'category',
      type: DataTypes.ENUM,
      values: ['sport','event','game','food','outdoor','club'],
      defaultValue: 'game',
      allowNull: false,
    },
  });

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