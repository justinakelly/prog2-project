var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');

var moduleArtworks = require('../db/artworksData')

router.get('/', controller.index);//luego cambiarlo a res.render que muestra html
 //index.html


/* GET home page. */ //welcome to express
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/login', controller.login); //login.html

 router.get('/register', controller.register); //register.html


module.exports = router;
