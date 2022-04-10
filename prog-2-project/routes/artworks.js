var express = require('express');
var router = express.Router();

var moduleArtworks = require('../db/artworksData')

router.get('/artworks', function(req, res){
    res.send(moduleArtworks)
});

module.exports = router;

