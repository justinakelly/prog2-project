var express = require('express'); //modulo express
var router = express.Router();// metodo Router modulariza rut
var controller = require('../controllers/indexController'); //req control
var db = require('../database/models');

router.get('/', controller.index);  //index.ejs

router.get('/results', controller.results); //search-results.ejs


module.exports = router; // export