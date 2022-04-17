var data = require('../db/data')

const controller = {
    
    register: function (req, res) {
        res.render('register');
},

    login: function (req, res) {
        res.render('login');
},

    profile: function (req, res) {
        res.render('profile', {
                                user: data.user,
                                artwork: data.artworks,
                                comments: data.comments,

                                });
},

    edit: function (req, res) {             
        res.render('profile-edit', { user: data.user });
}


}


module.exports = controller;
