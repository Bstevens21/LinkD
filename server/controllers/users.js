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
    var userId;
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
        res.status(201).send(user);
        res.params.send(user);
        userId = user.id;
        console.log((res.params.user.id).toString());
      })
      .catch(error => res.status(400).send(error))
      .then(
        mailOptions.html += 'localhost:8000/verify/'+userId+'/'+salt
        )
      .then(transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    }));
  },
};

