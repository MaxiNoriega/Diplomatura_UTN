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


/*para eliminar una novedad*/
router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;

    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
});//cierro get de eliminar

/*modificar: 1 paso => traiga diseño formulario + datos de esa novedad*/
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    console.log(req.params.id);
    var novedad = await novedadesModel.getNovedadById(id);

    res.render('admin/modificar', {//modificar.hbd => donde me trae la info  a traves de novedad
        layout: 'admin/layout',
        novedad
    })
});

/*Para modificar la novedad*/
router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }

        console.log(obj)

        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');

    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico la movedad'
        })
    }
})


module.exports = router;