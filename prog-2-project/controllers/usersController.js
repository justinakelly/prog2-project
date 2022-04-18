var data = require('../db/data')

const controller = {

    profile: function (req, res) {
        res.render('profile', {
                                user: data.user,
                                artwork: data.artworks,
                                comments: data.comments,

                                });
    },

    edit: function (req, res) {             
        res.render('profile-edit', { user: data.user });
    },

    register: function (req, res) {
        res.render('register');
    },

    login: function (req, res) {
        res.render('login');
    }

}

module.exports = controller;
