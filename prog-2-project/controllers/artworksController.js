var db = require('../database/models');// requiero modelos modulos


const controller = { // OL con metodos

// product.ejs  /artworks/:id
    show: function(req, res) { //callback 

        db.Artwork.findByPk(req.params.id, { include: //modelo modulo Artwork
                        [//asociaciones (relaciones) definidas en los modelos
                            {association: 'creator'},
                            {association: 'comments', include: [ {association: 'commenter'} ]}, // relaciones anidadas para hacer artworks.comments.length
                        ],
            order: [ ['comments', 'created_at', 'DESC']] 
            })

            .then(function (artworks) {  //resultado de promesa callback con parametro artwork 
                res.render('product', { artworks}); //vista, OL
            })
            .catch(function (error) {
                res.send(error);
            })
    },


// artworks-add.ejs  /artworks/add
    add: function(req, res) {
        if(!req.session.user) {
            return res.render ('artworks-add', { error: 'No perrmission. You must be registered or logged to add artworks'})
        }
        res.render('artworks-add');

    },
    store: function(req, res) {// callback metodo

            if (req.file) req.body.image = (req.file.path).replace('public', ''); //path multer
            
            if(!req.body.image) {
                return res.render ('artworks-add', { noImage: 'You must include an image'})
            }
            if(!req.body.date) {
                return res.render ('artworks-add', { noDate: 'You must include a date'})
            }
            
            req.body.user_id = req.session.user.id;
        
            db.Artwork.create(req.body) //recibe OL
                .then(function(){
                    res.redirect('/') //cierra reqres
                })
                .catch(function (error) {
                    res.send(error);
                })
    },

// artworks-edit.ejs     /artworks/:id/edit
    edit: function(req, res) {

        db.Artwork.findByPk(req.params.id)// propiedad .params de req (OL)
            .then(function (artworks) { //resultado de promesa callback con parametro artwork 
                if (!req.session.user || req.session.user.id !== artworks.user_id) {
                    return res.render ('artworks-edit', {error: 'You are not the owner of the artwork you are trying to edit.'}) 
                }
                res.render('artworks-edit', { artworks });
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    update: function(req, res) {
        if (req.file) req.body.image = (req.file.path).replace('public', ''); //path multer
        
        if(req.body.user_id == req.session.user.id){ 
            
            req.body.updated_at = new Date();
    
            db.Artwork.update(req.body, { where: { id: req.params.id } }) //where
                .then(function(artworks) { //resultado de promesa callback con parametro artwork 
                    res.redirect('/artworks/' + req.params.id)
                })
                .catch(function(error) {
                    res.send(error);
                })
        }else{
            return res.render ('artworks-edit', {error: 'You are not the owner of the artwork you are trying to edit.'})
        }
    },
    
    
// -  /artworks/:id/delete
    delete: function(req, res) {

        if (!req.session.user) {
            return res.redirect ('/artworks/' + req.params.id)
        } 
      
        db.Artwork.destroy({ where: { id: req.params.id } })//where //atributo columna, valor a buscar
            .then(function() {
                res.redirect('/users/me')
            })
            .catch(function(error) {
                res.send(error);
            })
    },


// -  artworks/:id/comment
    comment: function(req, res) {
    if (!req.session.user) { 
            res.redirect('/users/login')
        }
        // Set user from session user
        req.body.user_id = req.session.user.id;
        // Set artwork from url params
        req.body.artwork_id = req.params.id;

        db.Comment.create(req.body, { //recibe OL
            include: [ //relaciones anidadas
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

    }


};


module.exports = controller;