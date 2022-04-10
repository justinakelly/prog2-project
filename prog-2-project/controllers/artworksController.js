var moduleArtworks = require('../db/artworksData')

const controller = {
    index: function(req, res){ 

    }, //no lo entiendo, no serie en index?
    show: function(req, res){
        const result = moduleArtworks
        res.send(result)

    },
    add: function(req, res){

    }
   
};

module.exports = controller;
