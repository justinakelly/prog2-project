var express = require('express');
var router = express.Router();
var controller = require('../controllers/artworksController')
var multer = require ('multer');
const upload= multer ({dest:'public/images/uploads'}); //inicializar multer
const path = require('path');

//router.get('/user/:username', controller.username);
router.get('/creator/:creator', controller.creator);

router.get('/add', controller.add); //product-add.ejs
router.post('/add', controller.store)
//router.post('/add', upload.single('Image1'), controller.store);

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('image'), controller.update);

router.post('/:id/delete', controller.delete);

router.post('/:id/comment', controller.comment);

router.get('/:id', controller.show); //product.ejs --> muestra detalle

module.exports = router;