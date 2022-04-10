var users = require('../db/userData');

const controller = {
    profile: function(req, res, next) {
        res.send('respond with a resource');
    },
    edit: function(req, res){
        res.render()
    }

}

module.exports = controller;
