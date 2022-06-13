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

    
}

module.exports = controller;
