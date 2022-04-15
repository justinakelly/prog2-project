const { comments } = require('../db/data');
var data = require('../db/data');


const controller = {
//nos llevamos/cortamos el callback, el segundo argumento de la funcion de las rutas


    index: function(req, res){

        res.render('index', {
            artwork: data.artworks,
            commments: data.commments, 
            recent: data.artworks.date,
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

