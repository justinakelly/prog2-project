var db = require('../database/models');
var hasher = require('bcryptjs');
//const { locals } = require('../app');
const controller = {
   
    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },
    update: function(req, res){
    },
    profile: function (req, res) {
        // res.render('profile'); // { user: req.session.user} si no me funciona el codigo de abajo poner el res.render
        db.User.findByPk(req.session.user.id, { include: { all: true, nested: true }  })
        .then(function (user) {
            res.render('profile', { user });
        })
        .catch(function (error) {
            res.send(error)
        });                                    
},
stocking: function(req, res) {
    //res.render('profile');
    db.User.findByPk(req.params.id, { include: { all: true, nested: true } }
       // { include: [ { association: 'artworks' }, { association: 'comments' } ] }
        )
        .then(function (user) {
            res.render('profile', { user });
        })
        .catch(function (error) {
            res.send(error)
        });
},
edit: function (req, res) {     
   
        //res.render('profile-edit', {user: locals.me});
       // req.body.user_id = req.session.user.id;
  // db.Comment.create(req.body)
        db.User.findByPk(req.session.user.id)
        .then(function (my) {
           // req.session.user = user
            res.render('profile-edit', { my });
        })
        .catch(function (error) {
            res.send(error);
        })

   // res.render('profile-edit', req.body);
   
},

update: function(req, res) {
     //if (req.file) req.body.image = (req.file.path).replace('public', '');
    db.User.update(req.body, { where: { id: req.session.user.id } }
    )
        .then(function(my) {
            res.redirect('/')
        })
        .catch(function(error) {
            res.send(error);
        })
},

//con el access pasa que le das submit y te lleva a la pag en negro con {}
access: function(req, res) {
    db.User.findOne({where: {email: req.body.email}}) //busco usuario en db, en where busco lo que se mando por formulario de login
 .then(function (user) {//resultado de promesa=usuario
     // if (!user) throw Error('User not found.') 
    if (hasher.compareSync(req.body.password, user.password)) {// ver si la contrasena esta bien, compara lo que ingresa usr con hash de db
        req.session.user = user //guardo en campo usuario (servidor) datos del usuario, si es true entra a if
         if (req.body.rememberme){ //si apreta boton
             res.cookie('userId', user.id, {maxAge: 1000 * 60 * 60 * 7})// cookie nueva que se guarda en cliente por 7 hs
         }
         res.redirect('/users/me');
     } else {
         //throw Error('Invalid credentials')
         res.send("mal contrasena")
      }
  })
  .catch(function (error) {
      res.send(error)
  });    
 },
 //antes teniamos esto sin procesar el hasheo pero lo pruebo y tampoco me funciona
 //     const user = db.User.findOne({where: {username: req.body.username}}) //lo que nos manda el usuario
 //     .then(function (user) {
 //         if (user.password == req.body.password){ // if (hasher.compareSync(req.body.password, user.password))
 //             req.session.user = user
 //             if (req.body.rememberme){
 //                 res.cookie('userId', user.id, {maxAge: 1000 * 60 * 60 * 7})
 //             }
 //             res.redirect('/users/profile')
 //         } else {
 //            //throw Error('Invalid credentials')
 //            res.send("mal contrasena")
 //         }
 //     })
 //     .catch(function (error) {
 //         res.send(error)
 //     });    
 // },
 logout: function (req, res, next) {
    req.session.user = null;
    res.clearCookie('userId');
    res.redirect('/users/login')
},
register: function(req, res) {
    res.render('register');
    
},

//se guarda en la base de datos y te manda al form de login osea esta bien esto de abajo
store: function(req, res) {
    //  if (req.file) req.body.image = (req.file.path).replace('public', '');
    if (!req.body.email) { throw Error('No email provided.') }
     const hashedPassword = hasher.hashSync(req.body.password, 8);
    db.User.create({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
                document: req.body.document,
                birthdate: req.body.birthdate,
                profilepicture: req.body.profilepicture,
                })
        .then(function(){
            res.redirect('/users/login')
        })
        .catch(function(error){
            res.send(error)
        })
    }
   
}
module.exports = controller; 