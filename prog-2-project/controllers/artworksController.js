//const { localsName } = require('ejs');  //???
var db = require('../database/models');


const controller = {

// product.ejs  /artworks/:id
    show: function(req, res) {

        db.Artwork.findByPk(req.params.id, { include: 
                        [
                            {association: 'creator'},
                            {association: 'comments', include: [ {association: 'commenter'} ]}, //para hacer artworks.comments.length
                        ],
            order: [ ['comments', 'created_at', 'DESC']] 
            })

            .then(function (artworks) {
                res.render('product', { artworks});
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
    store: function(req, res) {

            if (req.file) req.body.image = (req.file.path).replace('public', '');
            
            if(!req.body.image) {
                return res.render ('artworks-add', { noImage: 'You must include an image'})
            }
            if(!req.body.date) {
                return res.render ('artworks-add', { noDate: 'You must include a date'})
            }
            
            req.body.user_id = req.session.user.id;
        
            db.Artwork.create(req.body)
                .then(function(){
                    res.redirect('/')
                })
                .catch(function (error) {
                    res.send(error);
                })
    },

// artworks-edit.ejs     /artworks/:id/edit
    edit: function(req, res) {

        db.Artwork.findByPk(req.params.id)
            .then(function (artworks) {
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
        if (req.file) req.body.image = (req.file.path).replace('public', '');
        
        if(req.body.user_id == req.session.user.id){ 
            
            req.body.updated_at = new Date();
    
            db.Artwork.update(req.body, { where: { id: req.params.id } })
                .then(function(artworks) {
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
        // if (!req.session.user) {
        //     throw Error('No autorizado.')
        // } // console.log(req.body.user_id);
        // console.log(req.session.user.id);
        
        if (!req.session.user || req.session.user.id !== req.body.user_id) {
            throw Error('You are not the owner of the artwork you are trying to delete.')
            return res.redirect ('/artworks/' + req.params.id)
        }
               console.log(req.body);
        //console.log(artworks.user_id);
        db.Artwork.destroy({ where: { id: req.params.id } })
            .then(function() {
            //  console.log(req.body.user_id);

                console.log(artworks.user_id);
                console.log(req.session.user.id);
                console.log(req.body);

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

    }


};


module.exports = controller;