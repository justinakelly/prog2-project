var moduleArtworks = require('../db/artworksData')

const controller = {
    index: function(req, res){ 
        //res.send('respond with products')
        
       // res.send (moduleArtworks[req.params.id -1])

         //--> cuando tenga ejs 
        //res.send ('listo')

    }, //no lo entiendo, no serie en index?
    show: function(req, res){
      //  const result = moduleArtworks[0]
        //const result = moduleArtworks[req.params.id - 1]
     // res.render ('product', {product: moduleArtworks[req.params.id]})
      //  res.send(result)
      console.log(moduleArtworks.lista[req.params.id -1])
      res.render ('product', {
          artwork: moduleArtworks.lista[req.params.id -1],  //arreglar esto porque cambie nombres de la carpeta db 
                                                                //archivos commentsData, userData no tiene que funcionar
          commentsInfo: moduleArtworks.comentarios
        })

    },
    add: function(req, res){
        res.send('hola')
    }
   
};

module.exports = controller;
