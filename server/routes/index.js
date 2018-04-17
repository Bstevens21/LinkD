const userController = require('../controllers').users;
const postController = require('../controllers').posts;
const User = require('../models').User;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Linkd API!',
  }));

  app.post('/api/createUser', userController.create);
  app.post('/api/signInUser', userController.signIn);
  app.get('/api/allPosts', postController.getPost);
  app.get('/api/filter/:category', postController.filterCat);
  app.get('/api/verify/:salt', function(req,res){
    const salt = req.params.salt;
    return User
    .find({
      where: { userSalt: salt }
    })
      .then(user => {
        user.updateAttributes({userRole: 'verified'});
        return res.redirect('http://localhost:3000/signin');
      })
      .then(updatedOwner => {
        res.json(updatedOwner);
      });
  });
  app.post('/api/createPost', postController.create);
};