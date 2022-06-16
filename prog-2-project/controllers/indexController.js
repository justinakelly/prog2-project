var db = require('../database/models');
//const artwork = db.Artwork;
const hasher = require('bcryptjs')
var op = db.Sequelize.Op;  //para los finds

const controller = {
//nos llevamos/cortamos el callback, el segundo argumento de la funcion de las rutas
index: function(req, res) {
    db.Artwork.findAll()
        .then(function (artworks) {
            res.render('index', { artworks });
        })
        .catch(function (error) {
            res.send(error)
        });
},
// index: function(req, res) {
//     db.Artwork.findAll({ include:{ all: true, nested: false } })
//         .then(function (artworks) {
//             res.render('index', { artworks });
//         })
//         .catch(function (error) {
//             res.send(error)
//         });
// },
    // index: function(req, res) {
    //     res.redirect('/artworks');
    // },


    // index:  function (req, res){
    //        db.Artwork.findAll()
    //         .then(function(artworks){
    //             res.render('index', {artworks:artworks});
    //         })
    //         .catch(function (error) {
    //             res.send(error)
    //         });
    //     },

    results: function(req, res) {
        db.Artwork.findAll({ 
            where: [{ title: {[op.like]: '%'+req.query.search+'%'} }] 
        })
        .then(function(data) {
            res.send(data);
        })
        .catch(function (error) {
            res.send(error)
        });
    

        //     where: {
        //          [op.or]: [
        //             { title: { [op.like]: "%"+req.query.criteria+"%"} },
        //             { username: { [op.like]: "%"+req.query.criteria+"%"} }
        //         ]
        //     },
        //     include: [ { association: 'owner' } ] 
        // }).then(function (artworks) {
        //          res.render('search-results', { artworks });
        //     })
        //     .catch(function (error) {
        //         res.send(error)
        //     });

     }
    
    
     
        // function(req, res){
        // artwork.findAll()
        // .then(
        //     data=> res.render(data)
        // )  
        // .catch(error=>console.log(error))


        // randomArtwork = data.artworks
        // function randomNum () {
        //     return Math.floor(Math.random() * randomArtwork.length);
        // }
        
        // function getRandomArtwork () {
        //     return randomArtwork[randomNum()];
        // }
    
        // let mixedArtworks = data.artworks
        // function getMixedArtwork () {
        //     mixedArtworks.sort()
        //     return Math.random() - 0.5
        // }
        // console.log(mixedArtworks)
        // console.log(getMixedArtwork())
        
        // res.render('index', {
        //                         artwork: data.artworks,
        //                         commments: data.commments, 
        //                         randomArtwork: getRandomArtwork()
        //                         // mostPopular: getMixedArtwork()
            
        //                     });

    
    
    // results: function (req,res){
    //     res.render ('search-results', { 
    //                                     artwork: data.artworks,
    //                                     results: req.query
    //                                 });
    
    // },
   
    // prueba: function (req, res){
    //    db.Artwork.findAll()
    //     .then(function(artworks){
    //         res.send(artworks);
    //     } )
        
    // },
}; 

module.exports = controller;
