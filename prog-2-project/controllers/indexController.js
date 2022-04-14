var data = require('../db/data');

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
    results: function (req,res){
        res.render ('search-results', { title: 'Express' });
    },

    login: function(req, res, next) {
        res.render('login', { title: 'Express' });
    },

    register: function(req, res, next) {
        res.render('register', { title: 'Express' })
    }
};

module.exports = controller;

