var data = require('../database/models')

const controller = {
index: function(req, res) {
    db.artworks.findAll({ include:{ all: true, nested: false } })
        .then(function (product) {
            res.render('product', { product });
        })
        .catch(function (error) {
            res.send(error)
        });
},
add: function(req, res) {
    if (!req.session.user) { 
        throw Error('Not authorized.')
    }
    res.render('product-add');
},
author: function(req, res) {
    db.artworks.findAll({
        'where': {'author': req.params.author}
    }).then(function (result) {
        res.render('product', { product: result });
    }).catch(function (error) {
        res.send(error);
    })
},
show: function(req, res) {
    db.artworks.findByPk(req.params.id, { include: { all: true, nested: true } })
        .then(function (product) {
            res.render('product', { product });
        })
        .catch(function (error) {
            res.send(error);
        })
},
store: function(req, res) {
    if (!req.session.user) { 
        return res.render('product-add', { error: 'Not authorized.' });
    }
    req.body.user_id = req.session.user.id; // agrega campo user_id con valor userid de la sesion (estando logueado)
    if (req.file) req.body.Image1 = (req.file.path).replace('public', '');// cambia nombre de foto que subo para sacar que sea public
    db.artworks.create(req.body)
        .then(function() { 
            res.redirect('/')
        })
        .catch(function(error) {
            res.send(error);
        })
},
delete: function(req, res) {
    if (!req.session.user) {
        throw Error('Not authorized.')
    }
    db.artworks.destroy({ where: { id: req.params.id } })
        .then(function() {
            res.redirect('/')
        })
        .catch(function(error) {
            res.send(error);
        })
},
edit: function(req, res) {
    db.artworks.findByPk(req.params.id)
        .then(function (product) {
            res.render('product-edit', { product });
        })
        .catch(function (error) {
            res.send(error);
        })
},
update: function(req, res) {
    if (req.file) req.body.Image1 = (req.file.path).replace('public', '');
    db.artworks.update(req.body, { where: { id: req.params.id } })
        .then(function(product) {
            res.redirect('/')
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
    req.body.book_id = req.params.id;
    db.Comment.create(req.body)
            .then(function() {
             res.redirect('/books/' + req.params.id)
        })
        .catch(function(error) {
            res.send(error);
         })
 },
};

module.exports = controller;
