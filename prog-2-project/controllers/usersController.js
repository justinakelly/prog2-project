var data = require('../db/data')

const controller = {
    
    register: function (req, res) {
    
        res.render('register', {title: 'prueba'});
},
    login: function (req, res) {
    res.render('login', {title: 'prueba'});
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
