var express = require('express');
var router = express.Router();
var controller = require('../controllers/artworksController')

//var moduleArtworks = require('../db/artworksData')


// router.get('/artworks', function(req, res){
//     res.send(moduleArtworks)
// });

//router.get('/', controller.index);

router.get('/:id', controller.show); //product.html

router.get('/add', controller.add); //product-add.html

module.exports = router;
