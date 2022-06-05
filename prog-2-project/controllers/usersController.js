var data = require('../db/data')

const controller = {

    profile: function (req, res) {
        res.render('profile', {
            user: data.user,
            artwork: data.artworks,
            comments: data.comments,
            // o algo asi
            // db.User.findByPk(req.session.user.id, { include: [ { association: 'products' } ] })
            // .then(function (user) {
            //     res.render('profile', { user });
            // })
            // .catch(function (error) {
            //     res.send(error)
                                });
    },
    access: function(req, res, next) {
        db.User.findOne({ where: { username: req.body.username }})
            .then(function(user) {
                if (!user) throw Error('User not found.')
                if (hasher.compareSync(req.body.password, user.password)) {
                    req.session.user = user;
                    if (req.body.rememberme) {
                        res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 7 })
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
    edit: function (req, res) {             
        res.render('profile-edit', { user: data.user });
    },

    register: function(req, res) {
        res.render('register');
    },
    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },
    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/')
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
    }
}

module.exports = controller;
