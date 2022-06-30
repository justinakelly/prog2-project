var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require ('express-session');
var db = require('./database/models'); // requiero modelos

//requiero rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artworksRouter = require('./routes/artworks'); //la requiero

var app = express();//acceso a todas las funcionalidades express

app.use(session( {
  secret: 'a_secret_word',// llave que encripta, me permite guar datos y traerlos de vuelta
  resave: false,
  saveUninitialized: true
}))

// view engine setup
app.set('views', path.join(__dirname, 'views')); // rec estaticos desde vistas
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json()); //capt info forms
app.use(express.urlencoded({ extended: false }));// tamb
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Cookie middleware por si cerras ventana, para recuperar sesion, pasa a todas las vistas una variable
app.use(function(req, res, next) {
  if (!req.session.user) { // si no estas logueado
    // Find the user
    db.User.findByPk(req.cookies.userId) //busca cookie de userid
      .then(function(user) {
        // Act as login
        req.session.user = user;// busca cookie en db y ponela en session
        next();
      })
  } else {
    next();
  }
})

// Session middleware, manda info de usauario a todas las vistas
app.use(function(req, res, next) {
  res.locals.me = req.session.user;//callback que a req.locals en el lugar de user le setea lo q esta en session
  next();
})

// uso rutas
app.use('/', indexRouter); // /recurso y  constante dnd almaceno modulo d recurso
app.use('/users', usersRouter);
app.use ('/artworks', artworksRouter); //la uso 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
