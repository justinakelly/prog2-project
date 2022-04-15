var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController')


router.get('/profile', controller.profile); //profile.ejs

router.get('/profile/edit', controller.edit); //profile-edit.ejs

router.get('/register', controller.register); //register.ejs

router.get('/login', controller.login); //login.ejs




module.exports = router;