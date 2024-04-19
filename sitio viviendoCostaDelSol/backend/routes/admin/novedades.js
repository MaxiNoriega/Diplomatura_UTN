var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

//Para listar Novedades
router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
    });
});

//Para agregar novedades
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {//agregar.hbs
        layout: 'admin/layout'
    });//cierra render
});//cierra Get

//controlador para capturar los datos enviados al formulario

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insetNovedad(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se caro la novedad'
        })
    }
})

module.exports = router;