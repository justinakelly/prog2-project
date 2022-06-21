var db = require('../database/models');



const controller = {
creator: function(req, res) {
    db.Artwork.findAll({
        'where': {'email': req.params.email}
    }).then(function (result) {
        res.render('product', { artworks: result });
    }).catch(function (error) {
        res.send(error);
    })
},
show: function(req, res) {
    db.Artwork.findByPk(req.params.id, //{ 
        { include: 
//  { all: true, nested: true }
            [
                {association: 'creator'},
                {association: 'comments',
                               include: [ {association: 'commenter'} ]} //para hacer artworks.comments.length
                
            ]
        }
        // include: [
        // {association: 'creator'},
        // //{association: 'commenter'},
        // {association: 'comments'}
        // ]
        // }
        )
        .then(function (artworks) {
            res.render('product', { artworks});
        })
        .catch(function (error) {
            res.send(error);
        })
       
},
add: function(req, res) {
//   if (!req.session.user) { 
//         // res.redirect('/login'); //aca pondria register y en register pondria: all ready have an acount? Login here y el link
//   throw Error('Not authorized.')
//   }
   res.render('artworks-add');

 },
store: function(req, res) {
   // res.send(req.file)
        req.body.user_id = req.session.user.id;
        if (req.file) req.body.image = (req.file.path).replace('public', '');
        req.body.created_at= new Date();
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
    if (!req.session.user) {
        throw Error('Not authorized.') //creo que ya es medio al pedo porque directamente no te aparece el boton de delete
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
    req.body.updated_at= new Date();
    db.Artwork.update(req.body, { where: { id: req.params.id } })
        .then(function(artworks) {
            res.redirect('/artworks/' + req.params.id)
        })
        .catch(function(error) {
            res.send(error);
        })
    },
comment: function(req, res) {
   if (!req.session.user) { 
         throw Error('Not authorized.')
     }
     // Set user from session user
    req.body.user_id = req.session.user.id;
    // Set book from url params
    req.body.artwork_id = req.params.id;
    req.body.created_at = new Date();

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