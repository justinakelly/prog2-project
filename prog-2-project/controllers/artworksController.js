const { user } = require('../db/data');
var data = require('../db/data')

const controller = {
  
  add: function(req, res){
    res.render('product-add', {
                                user: data.user
                              });

 },

    show: function(req, res){
      res.render ('product', {
                                artwork: data.artworks[req.params.id -1],
                                comment: data.comments
                              });

    }

};

module.exports = controller;
