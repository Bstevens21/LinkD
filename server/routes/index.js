const userController = require('../controllers').users;
const postController = require('../controllers').posts;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Linkd API!',
  }));

  app.post('/api/createUser', userController.create);
  app.post('/api/createPost', postController.create);
};