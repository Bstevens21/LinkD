const userController = require('../controllers').users;
const postController = require('../controllers').posts;
const User = require('../models').User;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Linkd API!',
  }));

  app.post('/api/createUser', userController.create);
  app.get('/api/verify/:salt', function(req,res){
    const salt = req.params.salt;
    console.log(salt);
    return User
    .find({
      where: { userSalt: salt }
    })
      .then(user => {
        return user.updateAttributes({userRole: 'verified'})
      })
      .then(updatedOwner => {
        res.json(updatedOwner);
      });
  });
  app.post('/api/createPost', postController.create);
};