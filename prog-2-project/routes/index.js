var express = require('express');
var router = express.Router();

var moduleArtworks = require('../db/artworksData')

router.get('/', function(req, res){
  res.send(moduleArtworks.getAll()) //luego cambiarlo a res.render que muestra html
});

/* GET home page. */ //welcome to express
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
