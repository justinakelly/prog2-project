var express = require('express');
var router = express.Router();
var controller = require('../controllers/artworksController')

var multer = require('multer'); //llamo libreria multer
const upload = multer ({dest: 'public/images/uploads'}); //configuro inicializo multer mandando las imagenes a un lugar
const path = require('path');


router.get('/add', controller.add); //product-add.ejs
router.post('/add', upload.single('image'), controller.store) //middleware que si recibe 1 archivo lo sube a la carpeta de uploads y le da nombre

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('image'), controller.update);//middleware que si recibe 1 archivo lo sube a la carpeta de uploads y le da nombre

router.post('/:id/delete', controller.delete);

router.post('/:id/comment', controller.comment);

router.get('/:id', controller.show); //product.ejs --> muestra detalle


module.exports = router;