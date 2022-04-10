var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController')


router.get('/profile', controller.profile); //profile.html

router.get('/profile/edit', controller.edit); //profile-edit.html


module.exports = router;
