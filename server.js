// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var portfolio = require('./modules/routes/portfolio');
var nodemailer = require('nodemailer');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use('/porfolio', portfolio);
// app.use(nodemailer.static('public'));

// globals
var port = process.env.PORT || 6378;

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
}); // end spin up server
