var db = require('../database/models');
var hasher = require('bcryptjs');
//const { locals } = require('../app');
const controller = {
   
    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },
    profile: function (req, res) {
        // res.render('profile'); // { user: req.session.user} si no me funciona el codigo de abajo poner el res.render
        db.User.findByPk(req.session.user.id, { include: 
            [
                {association: 'comments'},
                {association: 'artworks',
                               include: [ {association: 'comments'} ]} //para hacer artworks.comments.length
                
            ]
})
        .then(function (user) {
            res.render('profile', { user });
        })
        .catch(function (error) {
            res.send(error)
        });                                    
},
stocking: function(req, res) {
    //res.render('profile');
    db.User.findByPk(req.params.id, { include: 
        [
            {association: 'comments'},
            {association: 'artworks',
                           include: [ {association: 'comments'} ]} //para hacer artworks.comments.length
            
        ]
    }
        )
        .then(function (user) {
            res.render('profile', { user });
        })
        .catch(function (error) {
            res.send(error)
        });
},
edit: function (req, res) {     
        db.User.findByPk(req.session.user.id)
        .then(function (me) {
           // req.session.user = user
            res.render('profile-edit', { me });
        })
        .catch(function (error) {
            res.send(error);
        })
   
},

update: function(req, res) {
     if (req.file) req.body.profilepicture = (req.file.path).replace('public', '');
     if (req.body.password){ //si viene el campo password lo hasheas 
        req.body.password = hasher.hashSync(req.body.password, 8)}
    
    req.body.updated_at = new Date ();
    db.User.update(req.body, { where: { id: req.session.user.id } }
    )
        .then(function(me) {
            res.redirect('/users/me')
            if(req.body.username){
                req.session.user.username = req.body.user;
            }
        })
        .catch(function(error) {
            res.send(error);
        })
},

//con el access pasa que le das submit y te lleva a la pag en negro con {}
access: function(req, res, next) {
   
    db.User.findOne({where: {email: req.body.email}}) //busco usuario en db, en where busco lo que se mando por formulario de login
 .then(function (user) {//resultado de promesa=usuario

    if (!user) {
        return res.render ('login', {error: "Invalid email"})
    }
    if (hasher.compareSync(req.body.password, user.password)) {// ver si la contrasena esta bien, compara lo que ingresa usr con hash de db
        req.session.user = user; //guardo en campo usuario (servidor) datos del usuario, si es true entra a if
         if (req.body.rememberme){ //si apreta boton
             res.cookie('userId', user.id, {maxAge: 1000 * 60 * 60 * 7})// cookie nueva que se guarda en cliente por 7 hs
         }
         res.redirect('/users/me');
     } else {
        res.render('login', {error: "Wrong password"})
      }
  })
  .catch(function (err) {
      next(err)
  });    
 },
 
 logout: function (req, res, next) {
    req.session.user = null;
    res.clearCookie('userId');
    res.redirect('/users/login')
},

register: function(req, res) {
    res.render('register');
    
},

//se guarda en la base de datos y te manda al form de login osea esta bien esto de abajo
store: async function(req, res, next) {
    if (!req.body.email){
    return res.render ('register', {error: 'No email provided.'})
    }
    if (!req.body.email){
        return res.render ('register', {error: 'No username provided.'})
    }
    if (req.body.password.length <= 3){
        return res.render ('register', {error: 'Password must have at least 4 characters'})
    }
    if (!req.body.birthdate){
        return res.render ('register', {error: 'No birthdate provided.'})
    }
    if (!req.body.document){
        return res.render ('register', {error: 'No document provided.'})
    }
    try{
        // if (!req.body.email) { throw Error('No email provided.') }
        // if (!req.body.username) { throw Error('No username provided.') }
        // if (!req.body.password.length > 3) { throw Error('Password too short.') }
    const email = await db.User.findOne ({where: {email: req.body.email} })
    const username = await db.User.findOne ({where: {username: req.body.username} })
        if(email) {
            return res.render ('register', {error: 'Email already in use'})}
        if(username) {
            return res.render ('register', {error: 'Username already in use'})}

        // if (!req.body.email) { throw Error('No email provided.') }
        // if (!req.body.username) { throw Error('No username provided.') }
        // if (!req.body.password.length < 3) { throw Error('Password too short.') }
        // if (!req.body.birthdate) { throw Error('No birthdate provided.') }
        // if (!req.body.document) { throw Error('No document provided.') }
    

        const user = await db.User.findOne ({where: {email: req.body.email} })
        if(user) {throw Error ('Email already in use.')}
    } catch(err){
        res.render ('register', {error: err.message})
        next();
    }


    
    const hashedPassword = hasher.hashSync(req.body.password, 8);

    if (req.file) req.body.profilepicture = (req.file.path).replace('public', '');
    
   // req.body.created_at = new Date();
    
    db.User.create({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
                document: req.body.document,
                birthdate: req.body.birthdate,
                profilepicture: req.body.profilepicture 
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