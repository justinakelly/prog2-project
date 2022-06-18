var db = require('../database/models');
var hasher = require('bcryptjs');

const controller = {
   
    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },

    update: function(req, res){

    },
    profile: function (req, res) {
        res.render('profile'); // { user: req.session.user}
        //    db.User.findByPk(req.session.users.id, { include: [ { association: 'artworks' } ] })
        //     .then(function (users) {
        //         res.render('profile', { users });
        //     })
        //     .catch(function (error) {
        //         res.send(error)
        //     });                                    
    },

    edit: function (req, res) {             
        res.render('profile-edit', { users: data.users });
    },

    access: function(req, res, next) {
        db.User.findOne({where: {username: req.body.username}}) //busco usuario en db, en where busco lo que se mando por formulario de login
        .then(function (user) {//resultado de promesa=usuario
            // if (!user) throw Error('User not found.') 
            if (hasher.compareSync(req.body.password, user.password)) {// ver si la contrasena esta bien, compara lo que ingresa usr con hash de db
                req.session.user = user //guardo en campo usuario (servidor) datos del usuario, si es true entra a if
                if (req.body.rememberme){ //si apreta boton
                    res.cookie('userId', user.id, {maxAge: 1000 * 60 * 60 * 7})// cookie nueva que se guarda en cliente por 7 hs
                }
                res.redirect('/users/profile')
            } else {
               //throw Error('Invalid credentials')
               res.send("mal contrasena")
            }
        })
        .catch(function (error) {
            res.send(error)
        });    
    },
    

    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/users/login')
    },
    register: function(req, res) {
        res.render('register');
    },
    
    store: function(req, res) {
        if (!req.body.email) { throw Error('No email provided.') }
        const hashedPassword = hasher.hashSync(req.body.password, 8);
        db.User.create({
                    username: req.body.username,
                    password: hashedPassword,
                    email: req.body.email,
                    document: req.body.document,
                    birthdate: req.body.birthdate,
                    profilepicture: req.body.profilepicture,
                })
        .then(function(){
            res.redirect('/users/login')
        })
        .catch(function(error){
            res.send(error)
        })
    },
    
}

module.exports = controller;
