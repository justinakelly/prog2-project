var express = require('express');
var router = express.Router();
var controller = require('../controllers/artworksController')
var multer = require ('multer');
const upload= multer ({dest:'public/images/uploads'}); //inicializar multer
const path = require('path')

router.get('/', controller.index); 
router.get('/username/:username', controller.username);

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('image'), controller.update);

router.get('/add', controller.add); //artworks-add.ejs
router.post('/add', upload.single('image'), controller.store);

router.post('/:id/delete', controller.delete);

router.post('/:id/comment', controller.comment);

router.get('/:id', controller.show); //product.ejs --> muestra detalle

module.exports = router;