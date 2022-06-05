var express = require('express');
var router = express.Router();
var controller = require('../controllers/artworksController')
var multer = require ('multer');
const upload= multer ({dest:'public/images/uploads'}); //inicializar multer

router.get('/add', controller.add); //product-add.ejs
router.post('/add', upload.single('Image1'), controller.store);
router.get('/:id', controller.show); //product.ejs --> muestra detalle



module.exports = router;