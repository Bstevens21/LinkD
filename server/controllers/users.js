const User = require('../models').User;
const random = require('randomstring');
const nodemailer = require('nodemailer');

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
    subject: 'Hello', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world</b>' // html body
};

module.exports = {
  create(req, res) {
    var mailOptions = {
        from: '"Linkd" <Linkdteam1@gmail.com>', // sender address
        to: req.body.mail, // list of receivers
        subject: 'Verify Linkd Account', // Subject line
        html: '<b>Please navigate to the following link in order to verify your Linkd account:</b><br/><br/>' // html body
    };
    
    var salt = random.generate(10);
    return User
      .create({
        userEmail: req.body.mail,
        userPass: req.body.pass,
        userSalt: salt,
        userFirstName: req.body.firstName,
        userLastName: req.body.lastName,
      }) 
      .then(user => {
        res.status(201).json({redirectUrl:'/signin'});
      })
      .catch(error => res.status(400).send(error))
      .then(
          mailOptions.html += '<a href="http://localhost:8000/api/verify/'+salt+'">Verify</a>'
        )
      .then(transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    }));
  },

  signIn(req, res){
    const email = req.body.mail;
    console.log(email);
     User
    .find({
      where: { userEmail: email }
    })
      .then(user => {
        console.log(user.userRole);
        if(user.userRole == 'verified'){
          return res.status(200).json({redirectUrl:'/home'});
        }else{
          return res.status(200).json({redirectUrl:'/signin'});
        }
      })
  }


  // update(req, res) {
  //   return User
  //   const salt = req.params.salt;
  //   console.log(salt);
  //   User.find({
  //     where: { userSalt: salt }
  //   })
  //     .then(user => {
  //       return user.updateAttributes({userRole: 'verified'})
  //     })
  //     .then(updatedOwner => {
  //       res.json(updatedOwner);
  //     });
  // },
  
};

