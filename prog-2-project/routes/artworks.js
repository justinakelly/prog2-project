var express = require('express');
var router = express.Router();
var controller = require('../controllers/artworksController')
var multer = require ('multer');
const upload= multer ({dest:'public/images/uploads'}); //inicializar multer

router.get('/add', controller.add); //product-add.ejs
router.post('/add', upload.single('Image1'), controller.store);

// router.get('/', controller.index);
router.get('/user/:username', controller.username);

router.get('/:id', controller.edit);
router.post('/:id', upload.single('Image1'), controller.update);

router.post('/:id/delete', controller.delete);

router.get('/:id', controller.show); //product.ejs --> muestra detalle



module.exports = router;