var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userModel = require('../userModel');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = new mongoose.Schema({
  name: String,
  emailAddress: String,
  message: String
}); // end emailSchema
var emailModel = mongoose.model('emailModel', emailSchema);

router.get('/', function(req, res) {
  console.log('emailObject');
  emailModel.find().then(function(email){
    res.send(email);
    console.log('email:', email);
  });
}); // end email get call

router.post('/', function(req, res) {
  console.log('email url hit', req.body);
  var newEmail = req.body;
  console.log('req.body:', req.body);
  emailModel( newEmail ).save().then(function(){
    res.sendStatus(201);
  }).catch(function(err){
    console.log('error', err);
  });
}); // end router.post for submitEmail


module.exports = router;
