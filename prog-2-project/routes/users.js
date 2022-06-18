var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController');
var multer = require ('multer');
const upload= multer ({dest:'public/images/uploads'}); //inicializar multer

router.get('/me', controller.profile); 

router.get('/me/edit', controller.edit); 
router.post('/me/edit', controller.edit);
router.post('/me/edit', controller.update);

router.get('/login', controller.login);
router.post('/login', controller.access);

router.get('/logout', controller.logout);

router.get('/register', controller.register);
router.post('/register', controller.store);


router.get('/:id', controller.profile); //profile.ejs

router.get('/:id', controller.stocking);

module.exports = router;