var db = require('../database/models');

const controller = {
index: function(req, res) {
    db.Artwork.findAll({ include:{ all: true, nested: false } })
        .then(function (artworks) {
            res.render('index', { artworks });
        })
        .catch(function (error) {
            res.send(error)
        });
},

username: function(req, res) {
    db.Artwork.findAll({
        'where': {'username': req.params.username}
    }).then(function (result) {
        res.render('product', { artworks: result });
    }).catch(function (error) {
        res.send(error);
    })
},
show: function(req, res) {
    db.Artwork.findByPk(req.params.id, { include: { all: true, nested: true } })
        .then(function (artworks) {
            res.render('product', { artworks});
        })
        .catch(function (error) {
            res.send(error);
        })
},

add: function(req, res) {
//     if (!req.session.user) { 
//         // res.redirect('/login'); //aca pondria register y en register pondria: all ready have an acount? Login here y el link
//         throw Error('Not authorized.')
//     }
    res.render('artworks-add');
},
store: function(req, res) {
    // db.Artwork.create(req.body)
    //     .then(function(){
    //         res.redirect('/')
    //     })
    //     .catch(function (error) {
    //         res.send(error);
    //     })
    res.send(req.body);
    
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
    if (!req.session.users) {
        throw Error('Not authorized.')
    }
    db.Artwork.destroy({ where: { id: req.params.id } })
        .then(function() {
            res.redirect('/')
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
    db.Artwork.update(req.body, { where: { id: req.params.id } })
        .then(function(artworks) {
            res.redirect('/')
        })
        .catch(function(error) {
            res.send(error);
        })
    },

comment: function(req, res) {
     if (!req.session.users) { 
         throw Error('Not authorized.')
     }
     // Set user from session user
    req.body.user_id = req.session.users.id;
    // Set book from url params
    req.body.artwork_id = req.params.id;
    db.Comment.create(req.body)
            .then(function() {
             res.redirect('/product/' + req.params.id)
        })
        .catch(function(error) {
            res.send(error);
         })
 },
};

module.exports = controller;
