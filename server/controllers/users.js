const User = require('../models').User;
module.exports = {
  create(req, res) {
    console.log('hi');
    return User
      .create({
        userEmail: req.body.mail,
        userPass: req.body.pass,
        // role: req.body.role,
        userSalt: 'req.body.salt'
      }) 
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};

