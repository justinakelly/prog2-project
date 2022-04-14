var users = require('../db/userData');
var artworks = require('../db/artworksData');

const controller = {
    register: function (req, res) {
    res.render('register');
},
    login: function (req, res) {
    res.render('login');
},
    profile: function (req, res) {
    res.render('profile', {
        user: user,
        artworks: artworksData,
    });
},
    edit: function (req, res) {
    res.render('edit', {
        user: user,
    });
}
}


module.exports = controller;
