var express = require('express'); //modulo express
var router = express.Router();// metodo Router modulariza rut
var controller = require('../controllers/usersController');

var multer = require ('multer');
const upload = multer ({dest:'public/images/users/uploads'}); //inicializar multer
const path = require('path');

router.get('/login', controller.login);
router.post('/login', controller.access);

router.get('/logout', controller.logout);

//combo
router.get('/register', controller.register);
router.post('/register', upload.single('profilepicture'), controller.store);


router.get('/me', controller.profile); 

router.get('/me/edit', controller.edit); 
router.post('/me/edit', upload.single('profilepicture'), controller.update);

router.get('/:id', controller.stocking); // dinamic paramet


module.exports = router; //export