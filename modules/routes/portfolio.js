var express = require('express');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');

// uses
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());


module.exports = router;
