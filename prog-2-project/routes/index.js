var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');


router.get('/', controller.index);//luego cambiarlo a res.render que muestra html
 //index.html

// router.get('/login', controller.login); //login.html

//  router.get('/register', controller.register); //register.html lo acomode para q te mande desde users/login y register

 router.get('/results', controller.results);



/* GET home page. */ //welcome to express
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;