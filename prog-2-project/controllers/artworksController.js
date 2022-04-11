var moduleArtworks = require('../db/artworksData')

const controller = {
    index: function(req, res){ 
        //res.send('respond with products')
        
       // res.send (moduleArtworks[req.params.id -1])

       // res.render ('artworks', {product: moduleArtworks[req.params.id -1]})  --> cuando tenga ejs 
<<<<<<< HEAD
        
=======
        res.send ('listo')
>>>>>>> 069fdae36feb0c3970b6b16ab3310d883d3445ff

    }, //no lo entiendo, no serie en index?
    show: function(req, res){
        const result = moduleArtworks[0]
        //const result = moduleArtworks[req.params.id - 1]
        res.send(result)

    },
    add: function(req, res){
        res.send('hola')
    }
   
};

module.exports = controller;
