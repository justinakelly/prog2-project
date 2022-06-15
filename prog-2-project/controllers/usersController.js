var db = require('../database/models');
var hasher = require('bcryptjs');

const controller = {

    profile: function (req, res) {
            db.User.findByPk(req.session.users.id, { include: [ { association: 'artworks' } ] })
            .then(function (users) {
                res.render('profile', { users });
            })
            .catch(function (error) {
                res.send(error)
            });                                    
    },

    edit: function (req, res) {             
        res.render('profile-edit', { users: data.users });
    },

    
}

module.exports = controller;
