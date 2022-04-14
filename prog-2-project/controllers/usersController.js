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
        userData: user,
        artworks: artworksData,
    });
},
    edit: function (req, res) {
    res.render('profile-edit', {
        userData: user,
    });
}
}


module.exports = controller;
