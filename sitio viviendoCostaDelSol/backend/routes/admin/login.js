
var express = require('express');
var router = express.Router();

var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout',
  });
});

router.get('logout', function (req, res, next) {
  req.session.destroy (); //destruye las variables de sesion usuario y password
  res.render('admin/login',{
    layout: 'admin/login'
  });
});//cierre Logout

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;//captura la info MAXI
    var password = req.body.password;//1234

    var data = await usuariosModel.getUserByUserNameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});//cierro router.post

module.exports = router;

