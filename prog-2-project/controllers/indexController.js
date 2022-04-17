const { comments } = require('../db/data');
var data = require('../db/data');


const controller = {
//nos llevamos/cortamos el callback, el segundo argumento de la funcion de las rutas


    index: function(req, res){
        
        randomArtwork = data.artworks
        function randomNum () {
            return Math.floor(Math.random() * randomArtwork.length);
        }
        
        function getRandomArtwork () {
            return randomArtwork[randomNum()];
        }
    
        // let mixedArtworks = data.artworks
        // function getMixedArtwork () {
        //     mixedArtworks.sort()
        //     return Math.random() - 0.5
        // }
        // console.log(mixedArtworks)
        // console.log(getMixedArtwork())
        
        
        res.render('index', {
            artwork: data.artworks,
            commments: data.commments, 
            randomArtwork: getRandomArtwork()
         // mostPopular: getMixedArtwork()
            
            
        });

    },
    
    results: function (req,res){
        res.render ('search-results', { 
            artwork: data.artworks,
            results: req.query
        });
        // req.query
        // if (Object.keys(req.query).length !== 0) return res.render(.findBooksBy(req.query));
        // res.render('books_index', { books: books.getAll() });
    },

    login: function(req, res, next) {
        res.render('login', { title: 'Express' });
    },

    register: function(req, res, next) {
        res.render('register', { title: 'Express' })
    }
}; 

module.exports = controller;

