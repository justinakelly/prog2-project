var data = require('../db/artworksData')
var userData = require ('../db/userData')
var commentsData = require ('../db/commentsData')

const controller = {
    index: function(req, res){ 
        res.send('respond with products')
        
       // res.send (moduleArtworks[req.params.id -1])

         //--> cuando tenga ejs 
        //res.send ('listo')
        //index: function (req, res) {
         // res.render('product', {
           // userData: userData,
           // data: artworksData,
          //  commentsData: comentsD,
          //  idProduct: req.params.id,
       // }); 


    }, //no lo entiendo, no serie en index?
    show: function(req, res){
      //  const result = moduleArtworks[0]
        //const result = moduleArtworks[req.params.id - 1]
     // res.render ('product', {product: moduleArtworks[req.params.id]})
      //  res.send(result)
      console.log(data.artworks[req.params.id -1])
      res.render ('product', {
          artwork: data.artworks[req.params.id -1],  //arreglar esto porque cambie nombres de la carpeta db 
                                                               //archivos commentsData, userData no tiene que funcionar
          comment: data.comments
        })

    },
    add: function(req, res){
        res.send('hola')
    }
   
};

module.exports = controller;
