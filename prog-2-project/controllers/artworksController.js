const { localsName } = require('ejs');
var db = require('../database/models');



const controller = {
// creator: function(req, res) {
//     db.Artwork.findAll({
//         'where': {'email': req.params.email}
//     }).then(function (result) {
//         res.render('product', { artworks: result });
//     }).catch(function (error) {
//         res.send(error);
//     })
// },
show: function(req, res) {
    db.Artwork.findByPk(req.params.id, //{ 
        { include: 
//  { all: true, nested: true }
            [
                {association: 'creator'},
                {association: 'comments',
                               include: [ {association: 'commenter'} ], //para hacer artworks.comments.length
                               //order: [ [ 'created_at', 'DESC'] ]
                            }
            ],
           order: [ ['comments', 'created_at', 'DESC']] 
        },
       
        )
        .then(function (artworks) {
            res.render('product', { artworks});
        })
        .catch(function (error) {
            res.send(error);
        })
       
},
add: function(req, res) {
    if(!req.session.user) {
        return res.render ('artworks-add', { error: 'No perrmission. You must be registered or logged to add artworks'})
    }
    res.render('artworks-add');

 },
store: function(req, res) {
   
        if (req.file) req.body.image = (req.file.path).replace('public', '');
        if(!req.body.image) {
            return res.render ('artworks-add', { noImage: 'You must include an image'})
        }
        if(!req.body.date) {
            return res.render ('artworks-add', { noDate: 'You must include a date'})
        }
        req.body.user_id = req.session.user.id;
       // req.body.created_at = new Date(); 
      
        db.Artwork.create(req.body)
            .then(function(){
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    //res.send(req.body);
    
    // res.send(req.file);
    // if (!req.session.user) { 
    //     return res.render('artworks-add', { error: 'Not authorized.' });
    // }
    // req.body.user_id = req.session.user.id; // agrega campo user_id con valor userid de la sesion (estando logueado)
    // if (req.file) req.body.image = (req.file.path).replace('public', '');// cambia nombre de foto que subo para sacar que sea public
    // db.Artwork.create(req.body)
    //     .then(function() { 
    //         res.redirect('/')
    //     })
    //     .catch(function(error) {
    //         res.send(error);
    //     })
},
delete: function(req, res) {
    console.log(req.body.user_id);
    console.log(req.session.user.id);
    if (!req.session.user || req.session.user.id !== req.body.user_id) {
       // throw Error('You are not the owner of the artwork you are trying to delete.')
        return res.redirect ('/artworks/' + req.params.id) //creo que ya es medio al pedo porque directamente no te aparece el boton de delete
    }
    db.Artwork.destroy({ where: { id: req.params.id } })
        .then(function() {
            res.redirect('/users/me')
        })
        .catch(function(error) {
            res.send(error);
        })
},
edit: function(req, res) {
    // if (!req.session.user || req.session.user.id !== req.body.user_id) {
    //      return res.render ('artworks-add', {error: 'You are not the owner of the artwork you are trying to edit.'}) //creo que ya es medio al pedo porque directamente no te aparece el boton de delete
    //  }

    // console.log(req.body.user_id);
    // console.log(req.session.user.id);
    // console.log(req.body)
   db.Artwork.findByPk(req.params.id)
        .then(function (artworks) {
            res.render('artworks-edit', { artworks });
            
        })
        .catch(function (error) {
            res.send(error);
        })
},

update: function(req, res) {
    if (req.file) req.body.image = (req.file.path).replace('public', '');
    req.body.updated_at = new Date();

//    console.log(req.body.user_id);
//     console.log(req.session.user.id);
//     console.log(req.body)
   if(req.body.user_id == req.session.user.id){ //NO ME TOMA REQ.BODY.USER_ID LPM
    db.Artwork.update(req.body, { where: { id: req.params.id } })
        .then(function(artworks) {
            res.redirect('/artworks/' + req.params.id)
        })
        .catch(function(error) {
            res.send(error);
        })
    }else{
        return res.render ('artworks-add', {error: 'You are not the owner of the artwork you are trying to edit.'})
    }
    },
comment: function(req, res) {
   if (!req.session.user) { 
         throw Error('Not authorized.')
     }
     // Set user from session user
    req.body.user_id = req.session.user.id;
    // Set book from url params
    req.body.artwork_id = req.params.id;
    //req.body.created_at = new Date();

    db.Comment.create(req.body, {
        include: [
        {association: 'commenter'},
        {association: 'artwork'}
        ]
        })
            .then(function() {
             res.redirect('/artworks/' + req.params.id)
        })
        .catch(function(error) {
            res.send(error);
         })
 },
};
module.exports = controller;