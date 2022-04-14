var data = require('../db/data')

const controller = {
   
    show: function(req, res){
      res.render ('product', {
          artwork: data.artworks[req.params.id -1],
          comment: data.comments
        })

    },

    add: function(req, res){
        res.send('product-add', {artwork: data.artworks[req.params.id -1]})
    }
   
    
};

module.exports = controller;
