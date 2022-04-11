var index = require('../db/artworksData');
var moduleArtworks = require('../db/artworksData')

const controller = {
//nos llevamos/cortamos el callback, el segundo argumento de la funcion de las rutas
    index: function(req, res){
      //  res.send(moduleArtworks.getAll())
        res.render('index', {index: moduleArtworks.getAll() })

    },
    
    login: function(req, res, next) {
        res.render('index', { title: 'Express' })
    },
    register: function(req, res, next) {
        res.render('index', { title: 'Express' })
    }
};

module.exports = controller;

