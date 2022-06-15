var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');
var db = require('../database/models');

router.get('/', controller.index);  //index.ejs
router.get('/results', controller.results); //search-results.ejs


router.get('/login', controller.login);
router.post('/login', controller.access);

router.get('/logout', controller.logout);

router.get('/register', controller.register);
router.post('/register', controller.store);

module.exports = router;