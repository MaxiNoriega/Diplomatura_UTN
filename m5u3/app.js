var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//------lE DIGO QUE TRABAJAMOS CON LA CONFIG DOTENV USANDO VARIABLES DE ENTORNOS (.env)

require('dotenv').config();

var pool = require('./models/bd');

//-----------------------

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//-------------HAGO CONSULTAS SOBRE LA BASE DE DATOS----------

//--------MUESTRA TODA LA BASE DE DATOS

/*pool.query('select * from empleados').then(function(resultados){
  console.log(resultados)
});
*/

//--------INSERTA UN REGISTRO NUEVO A LA BASE DE DATOS
/*
var obj = {
  nombre: 'Maximiliano', 
  apellido: 'Noriega',
  trabajo: 'Ejecutivo comercial',
  edad: 41,
  salario: 500000,
  mail: 'mn@bignet.com'
}

pool.query('insert into empleados set?',[obj]).then(function(resultados){
  console.log(resultados)
});*/


//---CAMBIO DETERMINADOS DATOS EN UN DETERMINADO REGISTRO EN LA BASE DE DATOS-----

var id= 10;
var obj={
  nombre: 'Bruno',
  apellido: 'Noriega',
  trabajo: 'Programador Web'
};

pool.query('update empleados set? where id_emp=?',[obj,id]).then(function(resultados){
  console.log(resultados)
});


//-------------------------------FIN CALSE M5U3----------------------------


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
