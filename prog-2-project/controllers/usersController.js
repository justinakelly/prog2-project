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
        const user = db.User.findOne({where: {username: req.body.username}}) //lo que nos manda el usuario
        .then(function (user) {
            if (user.password == req.body.password){ // if (hasher.compareSync(req.body.password, user.password))
                req.session.user = user
                if (req.body.rememberme){
                    res.cookie('userId', user.id, {maxAge: 1000 * 60 * 60 * 7})
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
       
        // db.User.findOne({ where: { username: req.body.username }}) // busco usuario en db, en where busco lo que se mando por formulario de login
        //     .then(function(users) { //resultado de promesa=usuario
        //         if (!users) throw Error('User not found.') 
        //         if (hasher.compareSync(req.body.password, users.password)) {// ver si la contrasena esta bien, compara lo que ingresa usr con hash de db
        //             req.session.users = users; //guardo en campo usuario (servidor) datos del usuario, si es true entra a if
        //             if (req.body.rememberme) { //si apreta boton
        //                 res.cookie('usersId', users.id, { maxAge: 1000  ,60  :60 * 7 })// cookie nueva que se guarda en cliente por 7 hs
        //             }
        //             res.redirect('/');
        //         } else {
        //             throw Error('Invalid credentials.')
        //         }
        //     })
        //     .catch(function (error) {
        //         next(error)
        //     })
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
       // res.send(req.body)
      // const hashedPassword = hasher.hashSync(req.body.password, 10);
        db.User.create(req.body)
        .then(function(){
            res.redirect('/') //que nos mande a my profile 
        })
        .catch(function(error){
            res.send(error)
        })



        // if (!req.body.email) { throw Error('No email provided.') }
        // const hashedPassword = hasher.hashSync(req.body.password, 10);
        // db.User.create({
        //         username: req.body.username,
        //         password: hashedPassword,
        //         email: req.body.email,
        //     })
        //     .then(function () {
        //         res.redirect('/');
        //     })
        //     .catch(function (error) {
        //         res.send(error);
        //     })
    },
    
}

module.exports = controller;
