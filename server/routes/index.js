const userController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Linkd API!',
  }));

  app.post('/api/createUser', userController.create);
};