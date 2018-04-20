const userController = require('../controllers').users;
const postController = require('../controllers').posts;
const User = require('../models').User;
const nodemailer = require('nodemailer');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Linkd API!',
  }));
  app.post('/api/createPost', postController.create);
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
  app.post('/api/interested', function(req,res){
   
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
        to: 'dpowell@mavs.coloradomesa.edu', // list of receivers
        subject: 'Someone is interested in your activity', // Subject line
        html: 'Blake Stevens is interested in attending your Tennis on Saturday activity! Contact Blake at bwstevens@mavs.coloradomesa.edu.' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      return console.log('Message sent: ' + info.response);
    });
     
    
  });

  app.post('/api/link', postController.link);
};