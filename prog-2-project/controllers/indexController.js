var db = require('../database/models');
const artwork = db.Artwork;

const controller = {
//nos llevamos/cortamos el callback, el segundo argumento de la funcion de las rutas

    index:  function (req, res){
           db.Artwork.findAll()
            .then(function(artworks){
                res.render('index',{artworks:artworks});
            })
        },
    results: function(req, res) {
        db.Artwork.findAll({ 
            where: {
                 [op.or]: [
                    { title: { [op.like]: "%"+req.query.criteria+"%"} },
                    { author: { [op.like]: "%"+req.query.criteria+"%"} }
                ]
            },
            include: [ { association: 'owner' } ] 
        }).then(function (books) {
                 res.render('search-results', { books });
            })
            .catch(function (error) {
                res.send(error)
            });
     },
     access: function(req, res, next) {
        db.User.findOne({ where: { username: req.body.username }}) // busco usuario en db, en where busco lo que se mando por formulario de login
            .then(function(user) { //resultado de promesa=usuario
                if (!user) throw Error('User not found.') 
                if (hasher.compareSync(req.body.password, user.password)) {// ver si la contrasena esta bien, compara lo que ingresa usr con hash de db
                    req.session.user = user; //guardo en campo usuario (servidor) datos del usuario, si es true entra a if
                    if (req.body.rememberme) { //si apreta boton
                        res.cookie('userId', user.id, { maxAge: 1000  ,60  :60 * 7 })// cookie nueva que se guarda en cliente por 7 hs
                    }
                    res.redirect('/');
                } else {
                    throw Error('Invalid credentials.')
                }
            })
            .catch(function (err) {
                next(err)
            })
    },
    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },
    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/')
    },
    register: function(req, res) {
        res.render('register');
    },
    
    store: function(req, res) {
        if (!req.body.email) { throw Error('No email provided.') }
        const hashedPassword = hasher.hashSync(req.body.password, 10);
        db.User.create({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
            })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    
        // function(req, res){
        // artwork.findAll()
        // .then(
        //     data=> res.render(data)
        // )  
        // .catch(error=>console.log(error))


        // randomArtwork = data.artworks
        // function randomNum () {
        //     return Math.floor(Math.random() * randomArtwork.length);
        // }
        
        // function getRandomArtwork () {
        //     return randomArtwork[randomNum()];
        // }
    
        // let mixedArtworks = data.artworks
        // function getMixedArtwork () {
        //     mixedArtworks.sort()
        //     return Math.random() - 0.5
        // }
        // console.log(mixedArtworks)
        // console.log(getMixedArtwork())
        
        // res.render('index', {
        //                         artwork: data.artworks,
        //                         commments: data.commments, 
        //                         randomArtwork: getRandomArtwork()
        //                         // mostPopular: getMixedArtwork()
            
        //                     });

    
    
    // results: function (req,res){
    //     res.render ('search-results', { 
    //                                     artwork: data.artworks,
    //                                     results: req.query
    //                                 });
    
    // },
   
    // prueba: function (req, res){
    //    db.Artwork.findAll()
    //     .then(function(artworks){
    //         res.send(artworks);
    //     } )
        
    // },
}; 

module.exports = controller;

