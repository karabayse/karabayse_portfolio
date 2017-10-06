var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
// var nodemailer = require('nodemailer');
// var smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     auth: {
//         user: "",
//         pass: ""
//     }
// });

// uses
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
// router.use(nodemailer.static('public'));
// router.use(function(req, res) {
//     res.sendFile(__dirname + 'public/views/index.html');
// });

router.get('/*', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
}); // end router.get for index.html

// nodemailer get call
// router.get('/send', function(req, res) {
//   var mailOptions={
//         to : req.query.to,
//         subject : req.query.subject,
//         text : req.query.text
//     };
//     console.log(mailOptions);
//     smtpTransport.sendMail(mailOptions, function(error, response){
//      if(error){
//             console.log(error);
//         res.end("error");
//      }else{
//             console.log("Message sent: " + response.message);
//         res.end("sent");
//          }
// });
// });

module.exports = router;
