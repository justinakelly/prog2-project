var db = require('../database/models');
var hasher = require('bcryptjs');


const controller = {
   
//login.ejs   users/login    
    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },

    access: function(req, res, next) {
        db.User.findOne({where: {email: req.body.email}}) 
            .then(function (user) { //resultado de promesa=usuario

                if (!user) {
                    return res.render ('login', {error: "Invalid email"})
                }
                if (hasher.compareSync(req.body.password, user.password)) {
                    
                    req.session.user = user; //guardo en campo usuario (servidor) datos del usuario, si es true entra a if
                    if (req.body.rememberme){ 
                        res.cookie('userId', user.id, {maxAge: 1000 * 60 * 60 * 7})
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


// -   /users/logout
    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');

        res.redirect('/users/login')
    },


//register.ejs   /users/register
    register: function(req, res) {
        res.render('register');
    },
    store: async function(req, res, next) {

        if (!req.body.email){
            return res.render ('register', {error: 'No email provided.'})
        }
        if (!req.body.username){
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
            const email = await db.User.findOne ({where: {email: req.body.email} })
            const username = await db.User.findOne ({where: {username: req.body.username} })
                if(email) {
                    return res.render ('register', {error: 'Email already in use'})}
                if(username) {
                    return res.render ('register', {error: 'Username already in use'})}
        } catch(err){
            res.render ('register', {error: err.message})
            next();
        }

        const hashedPassword = hasher.hashSync(req.body.password, 8);
        if (req.file) req.body.profilepicture = (req.file.path).replace('public', '');
        
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
    },
   
//profile.ejs  users/me
    profile: function (req, res) {

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
//            users/:id
    stocking: function(req, res) {
    
        db.User.findByPk(req.params.id, { include: 
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

//profile-edit.ejs    users/me/edit
    edit: function (req, res) {  

        db.User.findByPk(req.session.user.id)
            .then(function (me) {
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
            .then(function(me) { //no se si esta bien esto
                if(req.body.username){
                    req.session.user.username = req.body.username;
                }
                res.redirect('/users/me')
            })
            .catch(function(error) {
                res.send(error);
            })
    }

}


module.exports = controller; 