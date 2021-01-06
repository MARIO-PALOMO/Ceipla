var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) { res.render('index', { title: 'Express' }); });

router.get('/nosotros', function (req, res, next) { res.render('nosotros'); });

router.get('/planificacion', function (req, res, next) { res.render('planificacion'); });

router.get('/quienessomos', function (req, res, next) { res.render('quienessomos'); });

router.get('/resnot', function (req, res, next) { res.render('resnot'); });

router.get('/sumo', function (req, res, next) { res.render('sumo'); });

router.get('/contacto', function (req, res, next) { res.render('contacto'); });

router.get('/eventosbd', function (req, res, next) { res.render('eventos-barriosdigitales'); });

router.get('/convenios', function (req, res, next) { res.render('convenios'); });

router.get('/nuestrosprogramas', function (req, res, next) { res.render('nuestrosprogramas'); });

router.get('/barrios', function (req, res, next) { res.render('barrios'); });

router.get('/noticia1', function (req, res, next) { res.render('noticia1'); });

router.get('/noticia1', function (req, res, next) { res.render('noticia1'); });

router.get('/noticia2', function (req, res, next) { res.render('noticia2'); });

router.get('/noticia3', function (req, res, next) { res.render('noticia3'); });

router.get('/noticia4', function (req, res, next) { res.render('noticia4'); });

router.get('/noticia5', function (req, res, next) { res.render('noticia5'); });

router.get('/noticia6', function (req, res, next) { res.render('noticia6'); });

router.get('/noticia7', function (req, res, next) { res.render('noticia7'); });

router.get('/noticia8', function (req, res, next) { res.render('noticia8'); });

router.get('/noticia9', function (req, res, next) { res.render('noticia9'); });

router.get('/noticia10', function (req, res, next) { res.render('noticia10'); });

router.get('/noticia11', function (req, res, next) { res.render('noticia11'); });

router.get('/noticia12', function (req, res, next) { res.render('noticia12'); });

router.get('/noticia13', function (req, res, next) { res.render('noticia13'); });

router.get('/noticia14', function (req, res, next) { res.render('noticia14'); });

router.get('/noticia15', function (req, res, next) { res.render('noticia15'); });

router.get('/noticia16', function (req, res, next) { res.render('noticia16'); });

router.get('/BDActoresSeguridadNacional', function (req, res, next) { res.render('BDActoresSeguridadNacional'); });

router.get('/guardias', function (req, res, next) { res.render('guardias'); });

router.get('/actores', function (req, res, next) { res.render('actores'); });

router.get('/bdgruposprioritaria', function (req, res, next) { res.render('bdgruposprioritaria'); });

router.get('/tenderos', function (req, res, next) { res.render('tenderos'); });

module.exports = router;
