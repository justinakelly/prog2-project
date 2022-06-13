var db = require('../database/models');

const controller = {

    profile: function (req, res) {
            db.User.findByPk(req.session.user.id, { include: [ { association: 'artworks' } ] })
            .then(function (user) {
                res.render('profile', { user });
            })
            .catch(function (error) {
                res.send(error)
            });                                    
    },

    edit: function (req, res) {             
        res.render('profile-edit', { user: data.user });
    },

    access: function(req, res, next) {
        db.User.findOne({ where: { username: req.body.username }}) // busco usuario en db, en where busco lo que se mando por formulario de login
            .then(function(user) { //resultado de promesa=usuario
                if (!user) throw Error('User not found.') 
                if (hasher.compareSync(req.body.password, user.password)) {// ver si la contrasena esta bien, compara lo que ingresa usr con hash de db
                    req.session.user = user; //guardo en campo usuario (servidor) datos del usuario, si es true entra a if
                    if (req.body.rememberme) { //si apreta boton
                        res.cookie('userId', user.id, { maxAge: 1000  ,60  :60 * 7 })// cookie nueva que se guarda en cliente por 7 hs
                    }
                    res.redirect('/');
                } else {
                    throw Error('Invalid credentials.')
                }
            })
            .catch(function (err) {
                next(err)
            })
    },
    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },
    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/')
    },
    register: function(req, res) {
        res.render('register');
    },
    
    store: function(req, res) {
        if (!req.body.email) { throw Error('No email provided.') }
        const hashedPassword = hasher.hashSync(req.body.password, 10);
        db.User.create({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
            })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error) {
                res.send(error);
            })
    },
}

module.exports = controller;
