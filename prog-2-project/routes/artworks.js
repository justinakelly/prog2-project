var express = require('express');
var router = express.Router();

var moduleArtworks = require('../db/artworksData')


router.get('/', function(req, res){
   res.send(moduleArtworks.getAll()) //luego cambiarlo a res.render que muestra html
    console.log('eaaaa')
});



router.get('/artworks', function(req, res){
    
});

module.exports = router;

