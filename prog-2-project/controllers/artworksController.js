var data = require('../db/data')

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
      res.render ('product', {
          artwork: data.artworks[req.params.id -1],
          comment: data.comments
        })

    },
    add: function(req, res){
        res.send('product-add', {title: 'prueba'})
    }
   
};

module.exports = controller;
