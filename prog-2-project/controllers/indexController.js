var db = require('../database/models/Index');
var op = db.Sequelize.Op; 


const controller = {

// index.ejs  localhost:3000
//nos llevamos/cortamos el callback, el segundo argumento de la funcion de las rutas
    index: function(req, res) {
        db.Artwork.findAll(
            {
                order: [ [ 'date', 'DESC'] ],
                include: [
                    {association: 'comments',},
                    {association: 'creator'}
                ]
            }
        )
            .then(function (artworks) {
                res.render('index', { artworks });
            })
            .catch(function (error) {
                res.send(error)
            });

    },


// search-results.ejs  /results?search=_______
    results: function(req, res) {
            if (!req.query.search) { 
                res.render('search-results', {error: "Searcher can't be empty"})
            }
            
            db.Artwork.findAll({ 
                where: {[op.or]: [
                    { name: {[op.like]: '%'+req.query.search+'%'}},
                    { description: {[op.like]: '%'+req.query.search+'%'} },
                ]},
                include: [{association: 'comments'},  {association: 'creator'}]
            })
                .then(function(artworks) {
                    res.render('search-results', { artworks: artworks, result: req.query.search });
                })
                .catch(function (error) {
                    res.send(error)
                });
        }

}; 

module.exports = controller;
