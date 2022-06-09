var data = require('../db/data')

const controller = {
index: function(req, res) {
    db.artworks.findAll()
        .then(function (product) {
            res.render('product', { product });
        })
        .catch(function (error) {
            res.send(error)
        });
},
add: function(req, res) {
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
    db.artworks.findByPk(req.params.id)
    .then(function (product) {
        res.render('product', { product });
    })
    .catch(function (error) {
        res.send(error);
    })
},
store: function(req, res) {
    // req.body.user_id = req.session.user.id;
    if (req.file) req.body.Image1 = (req.file.path).replace('public', '');
    db.artworks.create(req.body)
        .then(function() {
            res.redirect('/')
        })
        .catch(function(error) {
            res.send(error);
        })
},
delete: function(req, res) {
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
};

module.exports = controller;

// esto era lo que teniamos antes
// add: function(req, res){
//   res.render('product-add', {
//     user: data.user
//     });

// },

//   show: function(req, res){
//     res.render ('product', {
//       artwork: data.artworks[req.params.id -1],
//       comment: data.comments
//       });
//   }