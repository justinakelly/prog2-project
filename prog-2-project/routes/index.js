var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');
var db = require('../database/models');
var op = db.Sequelize.Op;  //para los finds


router.get('/', controller.index);  //index.ejs
router.get('/results', controller.results); //search-results.ejs
// router.get('/prueba', controller.prueba); 

module.exports = router;