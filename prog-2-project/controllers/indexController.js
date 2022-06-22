var db = require('../database/models');
//const artwork = db.Artwork;
var op = db.Sequelize.Op;  //para los finds

const controller = {
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
results: function(req, res) {
        // if (!req.query.search) { 
        //     throw Error ('searcher cant be empty')
        //     //res.send('no hay resultados')
        //  }
        db.Artwork.findAll({ 
            where: {[op.or]: [
                { name: {[op.like]: '%'+req.query.search+'%'}},
                { description: {[op.like]: '%'+req.query.search+'%'} },
            ]},
        include: [ {association: 'comments'},  {association: 'creator'}]
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
