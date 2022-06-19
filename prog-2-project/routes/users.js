var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController');
var multer = require ('multer');
const upload = multer ({dest:'public/images/users/uploads'}); //inicializar multer

router.get('/me', controller.profile); 

router.get('/me/edit', controller.edit); 

router.post('/me/edit', upload.single('profilepicture'), controller.update);

router.get('/login', controller.login);
router.post('/login', controller.access);

router.get('/logout', controller.logout);

router.get('/register', controller.register);
router.post('/register', upload.single('profilepicture'), controller.store);

router.get('/:id', controller.stocking);

module.exports = router;