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
  app.get('/api/interested/:postTitle', function(req,res){
    const random = require('randomstring');
    const nodemailer = require('nodemailer');
    
    const postTitle = req.body.title;
    
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'linkdteam1',
            pass: 'linkdpass21' 
        }
      });
    
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"LinkD" <LinkDteam1@gmail.com>', // sender address
        to: 'platinumwd1@gmail.com', // list of receivers
        subject: 'Someone is interested in your activity', // Subject line
        text: 'Blake Stevens is interested in attending your ' + postTitle + ' activity! Contact Blake at bwstevens@mavs.coloradomesa.edu.', // plaintext body
        html: '<b></b>' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  })
     
    
  });
  app.post('/api/createPost', postController.create);
  app.post('/api/link', postController.link);
};