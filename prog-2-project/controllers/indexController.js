const { commments } = require('../db/artworksData');
var data = require('../db/artworksData');

const controller = {
//nos llevamos/cortamos el callback, el segundo argumento de la funcion de las rutas
    index: function(req, res){
      //  res.send(moduleArtworks.getAll())
      //  res.render('index', {index: data.getAll() })
      function randomNum () {
        return Math.floor(Math.random() * data.artworks.length);
    }
     const randomArtwork = function getRandomArtwork (){
          return data.artworks[randomNum()]
      };
        res.render('index', {
            artwork: data.artworks,
            commments: data.commments, 
            mostCommented: randomArtwork})

    },
    
    login: function(req, res, next) {
        res.render('index', { title: 'Express' })
    },
    register: function(req, res, next) {
        res.render('index', { title: 'Express' })
    }
};

module.exports = controller;

