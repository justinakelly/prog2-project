var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController');

// router.get('/me', controller.myProfile); 
// router.get('/me/edit', controller.edit); 
// router.post('/me/edit', controller.edit);

router.get('/:id', controller.profile); //profile.ejs

router.get('/login', controller.login);
router.post('/login', controller.access);

router.get('/logout', controller.logout);

router.get('/register', controller.register);
router.post('/register', controller.store);






module.exports = router;