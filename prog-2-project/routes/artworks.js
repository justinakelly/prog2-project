var express = require('express'); //modulo express
var router = express.Router();// metodo Router modulariza rut
var controller = require('../controllers/artworksController')// requiero controladores 

var multer = require('multer'); //llamo libreria multer
const upload = multer ({dest: 'public/images/uploads'}); //configuro inicializo multer mandando las imagenes a un lugar
const path = require('path');

//combo
router.get('/add', controller.add); //product-add.ejs, req metodo add controlador artw
router.post('/add', upload.single('image'), controller.store) //middleware  1 archivo a uploads y le da nombre

// dinamic paramet
router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('image'), controller.update);//middleware  1 archivo a uploads y le da nombre
router.post('/:id/delete', controller.delete);

router.post('/:id/comment', controller.comment);

router.get('/:id', controller.show); //product.ejs --> muestra detalle


module.exports = router; //export