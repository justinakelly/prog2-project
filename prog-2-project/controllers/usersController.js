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
        user: data.user,
        artwork: data.artworks,
        commments: data.commments

    });
},
    edit: function (req, res) {             //NO ME SALE
    res.render('profile-edit', {
        title: "hola" //userData: user,
    });
}
}


module.exports = controller;
