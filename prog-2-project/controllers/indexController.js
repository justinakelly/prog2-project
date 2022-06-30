var db = require('../database/models');// requiero modelos modulos
var op = db.Sequelize.Op; 


const controller = {

// index.ejs  localhost:3000
//nos llevamos/cortamos el callback, el segundo argumento de la funcion de las rutas
    index: function(req, res) {
        db.Artwork.findAll( //sequelize para consultar dB modelo modulo Artwork

            {
                order: [ [ 'date', 'DESC'] ],
                include: [
                    {association: 'comments',}, //relaciones anidadas
                    {association: 'creator'}
                ]
            }
        )
            .then(function (artworks) {//resultado de promesa callback con parametro artwork 
                res.render('index', { artworks });
            })
            .catch(function (error) {
                res.send(error)
            });

    },


// search-results.ejs  /results?search=_______
    results: function(req, res) {
            if (!req.query.search) {  // OL para obtener la query string
                res.render('search-results', {error: "Searcher can't be empty"})
            }
            
            db.Artwork.findAll({ 
                where: {[op.or]: [ 
                    { name: {[op.like]: '%'+req.query.search+'%'}},
                    { description: {[op.like]: '%'+req.query.search+'%'} },
                ]},
                include: [{association: 'comments'},  {association: 'creator'}] // relaciones anidadas
            })
                .then(function(artworks) { //resultado de promesa callback con parametro artwork 
                    res.render('search-results', { artworks: artworks, result: req.query.search });
                })
                .catch(function (error) {
                    res.send(error)
                });
        }

}; 

module.exports = controller;
