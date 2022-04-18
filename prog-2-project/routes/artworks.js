var express = require('express');
var router = express.Router();
var controller = require('../controllers/artworksController')

router.get('/add', controller.add); //product-add.ejs
router.get('/:id', controller.show); //product.ejs --> muestra detalle



module.exports = router;