var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');
var db = require('../database/models');

router.get('/', controller.index);  //index.ejs

router.get('/results', controller.results); //search-results.ejs


module.exports = router;